interface User {
  email: string;
  password: string;
}

export const initialUser: User = { email: "", password: "" };
export type { User };
