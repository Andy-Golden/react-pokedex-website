interface User {
  email: string | null;
  password: string | null;
}

export const initialUser: User = { email: null, password: null };
export type { User };
