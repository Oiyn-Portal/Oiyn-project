import { Events } from 'src/i18n';

export const allowedImagesFormat = [
  'image/png',
  'image/jpeg',
  'application/pdf',
];

export const errorToMsg: Record<string, { title: Events; msg: Events }> = {
  'invalid sms code': {
    title: 'events.error.phone.required',
    msg: 'events.error.phone.required',
  },
  'something was wrong': {
    title: 'events.error.phone.required',
    msg: 'events.error.phone.required',
  },
  default: {
    title: 'events.error.phone.required',
    msg: 'events.error.phone.required',
  },
  'OTP Expired': {
    title: 'events.error.phone.required',
    msg: 'events.error.phone.required',
  },
};
