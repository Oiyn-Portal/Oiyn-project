import { DictionaryKey, Events } from 'src/i18n';

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

export const CATEGORIES: { msg: DictionaryKey; value: string }[] = [
  {
    msg: 'categories.popular',
    value: 'popular',
  },
  {
    msg: 'categories.arcades',
    value: 'arcades',
  },
  {
    msg: 'categories.desktop',
    value: 'desktop',
  },
  {
    msg: 'categories.puzzles',
    value: 'puzzles',
  },
  {
    msg: 'categories.childish',
    value: 'childish',
  },
  {
    msg: 'categories.casual',
    value: 'casual',
  },
  {
    msg: 'categories.forTwo',
    value: 'forTwo',
  },
  {
    msg: 'categories.training',
    value: 'training',
  },
  {
    msg: 'categories.horror',
    value: 'horror',
  },
  {
    msg: 'categories.rolePlaying',
    value: 'rolePlaying',
  },
  {
    msg: 'categories.simulators',
    value: 'simulators',
  },
  {
    msg: 'categories.strategies',
    value: 'strategies',
  },
];
