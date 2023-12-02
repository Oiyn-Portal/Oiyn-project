type PublicEnv = 'local' | 'develop' | 'staging' | 'production';
export const PUBLIC_ENV = import.meta.env.VITE_PUBLIC_ENV as PublicEnv;
export const APP_VERSION = import.meta.env.VITE_VERSION || '';

const configs: Record<PublicEnv, { API_HOST: string }> = {
  local: {
    API_HOST: 'localhost:8000',
  },
  develop: {
    API_HOST: 'dev.api.sammy.expert',
  },
  staging: {
    API_HOST: 'staging.api.sammy.expert',
  },
  production: {
    API_HOST: 'api.sammy.expert',
  },
};

export const { API_HOST } = configs[PUBLIC_ENV];

export const GOOGLE_MAPS_URL = 'https://www.google.com/maps/search';
export const INSTAGRAM_URL = 'https://www.instagram.com';
export const FACEBOOK_URL = 'https://www.facebook.com';
export const FACEBOOK_MSG_URL = 'https://m.me';
export const WHATSAPP_WEB_URL = 'https://api.whatsapp.com/';
export const WHATSAPP_MOB_URL = 'whatsapp://';
export const GOOGLE_CALENDAR_URL =
  'https://calendar.google.com/calendar/render';

export const IP_API_URL = 'https://ipapi.co/json/';
