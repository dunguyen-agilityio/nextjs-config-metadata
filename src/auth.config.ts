import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { AUTH_ROUTES, PUBLIC_ROUTES } from "./constants/route";
import { apiClient } from "./services/api-client";
import { DataResponse } from "./types/strapi";
import { AuthResponse } from "./types/auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    authorized: async ({ auth, request: { nextUrl } }) => {
      const isAuthenticated = !!auth?.user;
      const isOnPublicRoute = new Set(Object.values(PUBLIC_ROUTES)).has(
        nextUrl.pathname
      );

      const isOnAuthRoute = new Set(Object.values(AUTH_ROUTES)).has(
        nextUrl.pathname
      );

      if (nextUrl.pathname === "/") {
        return Response.redirect(new URL(PUBLIC_ROUTES.HOME, nextUrl));
      }

      if (isOnPublicRoute) return true;

      if (!isAuthenticated) {
        if (isOnAuthRoute) return true;
        console.log("nextUrl.pathname", nextUrl.pathname);
        return Response.redirect(new URL(AUTH_ROUTES.SIGN_IN, nextUrl));
      }

      if (!isOnAuthRoute) return true;
      return Response.redirect(new URL(PUBLIC_ROUTES.HOME, nextUrl));
    },
    signIn: async ({ account, user }) => {
      if (!account) return false;

      const { provider, access_token } = account;

      const { image } = user;

      const { data, error } = await apiClient.get<AuthResponse>(
        `auth/${provider}/callback?access_token=${access_token}`
      );

      if (error) return false;

      const { jwt, user: userResponse } = data;

      const res = await apiClient.put<AuthResponse>(
        `users/${userResponse.id}`,
        {
          data: { avatarUrl: image },
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      console.log("res", res);

      return true;
    },
  },
  providers: [Google],
});
