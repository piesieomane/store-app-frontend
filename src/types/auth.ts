export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

export interface AuthStore {
  token: string | null;
  user: AuthResponse['user'] | null;
  setAuth: (auth: AuthResponse | null) => void;
  logout: () => void;
  isAuthenticated: boolean;
}