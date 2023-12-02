export const ENDPOINTS = {
  USER_GET_TIME_SLOTS: '/slots',
  USER_GET_USER: '/user/:orderUID',
  USER_GET_POLICY: '/policy/user/:id',
  USER_GET_SERVICES: '/service/user/:id',
  FILES_UPLOAD_IMAGE: '/attachments/upload/image',
  FILES_UPLOAD_DEPOSIT: '/deposit/upload/file',
  CLIENT_PHONE_VERIFY_START: '/client/sign-up/phone',
  APPOINTMENTS_ADD_APPOINTMENT: '/appointment/client',
  CLIENT_PHONE_VERIFY_END: '/client/sign-up/phone/code',
} as const;

export type Endpoints = typeof ENDPOINTS;
