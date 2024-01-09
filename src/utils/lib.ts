import Compress from 'compress.js';

import { API_HOST, PUBLIC_ENV } from 'src/constants/env';
import { Locales } from 'src/i18n';
import { Attachments, Time } from 'src/types';

export const getAPIUrl = (protocol: 'https' | 'wss') => {
  const API_PROTOCOL =
    PUBLIC_ENV === 'local' ? protocol.slice(0, -1) : protocol.slice(0, -1); //protocol;
  const ENDPOINT = protocol === 'wss' ? '/ws' : '';

  return `${API_PROTOCOL}://${API_HOST}${ENDPOINT}`;
};

export const getGoogleCalendarUrl = (
  base: string,
  query: Record<string, string>
) => {
  if (!query) {
    return base;
  }

  const searchParams = new URLSearchParams(query);

  return `${base}?${searchParams}`;
};

export const withoutRepeat = <T extends { _id: string }>(data?: T[]) => {
  if (!data) {
    return [];
  }

  return data.filter(
    (item, index, self) =>
      item !== null && index === self.findIndex((el) => el?._id === item?._id)
  );
};

export const makeFormData = (params: Record<string, string>): FormData => {
  const formData = new FormData();
  const keys = Object.keys(params);

  keys.forEach((key) => {
    const value = params[key];

    if (value !== undefined) {
      formData.append(
        key,
        Array.isArray(value) || (typeof value === 'object' && key !== 'file')
          ? JSON.stringify(value)
          : value
      );
    }
  });

  return formData;
};

export const createArray = (el: number) => new Array(el).fill('');

export const generateID = () => Date.now().toString();

export const getImageKey = (url?: string) => url?.split('.')[3]?.substring(4);

export const setAttachmentImageKey = (attachments?: Attachments) => {
  const files = attachments?.files;

  if (!attachments || !attachments?.files) {
    return attachments;
  }

  return {
    ...attachments,
    files: {
      now: getImageKey(files?.now),
      want: getImageKey(files?.want),
    },
  };
};

const compress = new Compress();

export const resizeImage = async (file: File) => {
  if (!file) {
    return;
  }

  const resizedImage = await compress.compress([file], {
    size: 3,
    quality: 1,
    maxWidth: 600,
    maxHeight: 600,
    resize: false,
  });

  const img = resizedImage[0];
  const base64str = img.data;
  const imgExt = img.ext;

  return Compress.convertBase64ToFile(base64str, imgExt);
};

export const getLocale = (
  locales: Locales[],
  defaultLocale: Locales,
  deviceLanguage: string
): Locales =>
  locales?.find((el) => deviceLanguage?.toLowerCase().includes(el)) ||
  defaultLocale;

export const cleanPhoneNumber = (phone: number | string): string =>
  phone?.toString()?.replace(/[^\d]/g, '');

export const normalizePhoneNumber = (phone: number | string): string =>
  Number(phone) ? '+' + cleanPhoneNumber(phone) : '';

export const sortTimesSlots = (slots: Time[]) =>
  slots.sort((a, b) => a.localeCompare(b));

export const normalizeImageName = (url: string) => {
  const fileName = url?.split('/').pop()?.split('?')[0] || null;
  return fileName;
};

export const debounce = (func: (value: string) => void, deleay: number) => {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return (value: string) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      func(value);
      timer = null;
    }, deleay);
  };
};
