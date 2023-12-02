import * as yup from 'yup';
import 'yup-phone';

import { Events } from 'src/i18n';

const _msg = (message: Events): Events => message;

export const rules = {
  name: yup
    .string()
    .max(50, _msg('events.error.phone.required'))
    .required(_msg('events.error.phone.required')),

  phone: (code?: string) =>
    yup
      .string()
      .phone(code, true, _msg('events.error.phone.required'))
      .required(_msg('events.error.phone.required')),
};

export const validators = {
  client: (code?: string) =>
    yup.object().shape({
      name: rules.name,
      phone: rules.phone(code),
    }),
};
