import { User } from "@/models/user";

export type AuthResponse = {
  jwt: string;
  user: User;
};
