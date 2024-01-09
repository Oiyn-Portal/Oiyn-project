type PublicEnv = 'local' | 'production';
export const PUBLIC_ENV = import.meta.env.VITE_PUBLIC_ENV as PublicEnv;
export const APP_VERSION = import.meta.env.VITE_VERSION || '';
export const API_KEY = import.meta.env.VITE_API_KEY || '';

const configs: Record<PublicEnv, { API_HOST: string }> = {
  local: {
    API_HOST: 'localhost:8000',
  },
  production: {
    API_HOST: '89.104.68.159:8000',
  },
};

export const { API_HOST } = configs[PUBLIC_ENV];
