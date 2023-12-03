type PublicEnv = 'local' | 'production';
export const PUBLIC_ENV = import.meta.env.VITE_PUBLIC_ENV as PublicEnv;
export const APP_VERSION = import.meta.env.VITE_VERSION || '';
export const BASE_ID = import.meta.env.BASE_ID || 'appNB5Pmysi5CTGt5';
export const API_KEY =
  import.meta.env.API_KEY ||
  'patL44gkBXrscykCE.53ff96d03702c76fd7790c61344fdfbf03a12233902b61bf17613d525ffe4f62';

const configs: Record<PublicEnv, { API_HOST: string }> = {
  local: {
    API_HOST: `api.airtable.com/v0/${BASE_ID}/games`,
  },
  production: {
    API_HOST: `api.airtable.com/v0/${BASE_ID}/games`,
  },
};

export const { API_HOST } = configs[PUBLIC_ENV];
