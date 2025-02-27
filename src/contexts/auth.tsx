import { createContext } from 'react';

import { AuthState } from '@/types';

const AuthContext = createContext<{
    state: AuthState | undefined;
    setState:(value: AuthState | undefined) => void;
    logout: () => void;
    login: (token: string, value: AuthState) => void;
      }>({
        state: undefined,
        setState: () => {
          console.warn('AuthContext.setState called without a provider');
        },
        logout: () => {
          console.warn('Logout called without a provider');
        },
        login: () => {
          console.warn('Login called without a provider');
        },
      });

export default AuthContext;
