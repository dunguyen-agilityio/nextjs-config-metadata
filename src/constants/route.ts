export const AUTH_ROUTES = {
  SIGN_IN: "/sign-in",
};

export const PRIVATE_ROUTES = {
  NFT_MARKET: "/template",
};

export const PUBLIC_ROUTES = {
  HOME: "/dashboard",
  BIOGRAPHY: "/biography",
  ENTREPRENEUR: "/entrepreneur",
  SPEAKER: "/speaker",
  CONSULTANT: "/consultant",
  ACTIVIST: "/activist",
  PRESS: "/press",
  AWARDS: "/awards",
  PERFORMER: "/performer",
  DJ: "/dj",
};

export const ROUTES = {
  ...AUTH_ROUTES,
  ...PRIVATE_ROUTES,
  ...PUBLIC_ROUTES,
};

type NavRoute = {
  title: string;
  href: string;
};

export const NAV_ROUTES: NavRoute[] = Object.entries(PUBLIC_ROUTES).map(
  ([title, href]) => ({
    title: `${title[0]}${title.slice(1).toLowerCase()}`,
    href,
  })
);
