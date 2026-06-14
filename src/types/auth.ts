import type { User } from "./user";

export interface LoginCredentials {
  email: string;
  password: string;
  remember_me?: boolean;
}

export interface AuthResponse {
  status: "success";
  message: string;
  token: string;
  token_type: string;
  expires_at: string | null;
  user: User;
}

export interface RegisterInput {
  name: string;
  email: string;
  password: string;
  role: "driver" | "association_admin";
  license_number?: string;
  phone?: string;
}

export interface LoginInput {
  email: string;
  password: string;
  remember_me : boolean;
}
