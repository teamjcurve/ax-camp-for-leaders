import { useState, useEffect, useCallback } from 'react';
import { AUTH_API_URL } from '../config';

type Role = 'internal' | 'external';

interface AuthState {
  isAuthenticated: boolean;
  role: Role | null;
  isLoading: boolean;
  error: string | null;
}

const TOKEN_KEY = 'ax_camp_token';

export function useAuth() {
  const [state, setState] = useState<AuthState>({
    isAuthenticated: false,
    role: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const token = sessionStorage.getItem(TOKEN_KEY);
    if (!token) {
      setState((s) => ({ ...s, isLoading: false }));
      return;
    }

    fetch(`${AUTH_API_URL}/api/verify`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data: { valid: boolean; role?: string }) => {
        if (data.valid) {
          setState({ isAuthenticated: true, role: data.role as Role, isLoading: false, error: null });
        } else {
          sessionStorage.removeItem(TOKEN_KEY);
          setState({ isAuthenticated: false, role: null, isLoading: false, error: null });
        }
      })
      .catch(() => {
        sessionStorage.removeItem(TOKEN_KEY);
        setState({ isAuthenticated: false, role: null, isLoading: false, error: null });
      });
  }, []);

  const login = useCallback(async (id: string, password: string, role: Role) => {
    setState((s) => ({ ...s, error: null, isLoading: true }));
    try {
      const res = await fetch(`${AUTH_API_URL}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, password, role }),
      });
      const data = await res.json();
      if (!res.ok) {
        setState((s) => ({ ...s, isLoading: false, error: data.error || '로그인에 실패했습니다.' }));
        return;
      }
      sessionStorage.setItem(TOKEN_KEY, data.token);
      setState({ isAuthenticated: true, role: data.role, isLoading: false, error: null });
    } catch {
      setState((s) => ({ ...s, isLoading: false, error: '서버에 연결할 수 없습니다.' }));
    }
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem(TOKEN_KEY);
    setState({ isAuthenticated: false, role: null, isLoading: false, error: null });
  }, []);

  return { ...state, login, logout };
}
