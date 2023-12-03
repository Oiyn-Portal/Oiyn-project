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
    value: 'test',
  },
  {
    msg: 'categories.arcades',
    value: 'test',
  },
  {
    msg: 'categories.desktop',
    value: 'test',
  },
  {
    msg: 'categories.puzzles',
    value: 'test',
  },
  {
    msg: 'categories.childish',
    value: 'test',
  },
  {
    msg: 'categories.casual',
    value: 'test',
  },
  {
    msg: 'categories.forTwo',
    value: 'test',
  },
  {
    msg: 'categories.desktop',
    value: 'test',
  },
  {
    msg: 'categories.training',
    value: 'test',
  },
  {
    msg: 'categories.horror',
    value: 'test',
  },
  {
    msg: 'categories.rolePlaying',
    value: 'test',
  },
  {
    msg: 'categories.simulators',
    value: 'test',
  },
  {
    msg: 'categories.strategies',
    value: 'test',
  },
];
