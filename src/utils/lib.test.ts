import { describe, expect, test } from 'vitest';

import { GOOGLE_CALENDAR_URL } from 'src/constants/env';
import { toGoogleDate } from 'src/utils/dates';
import {
  cleanPhoneNumber,
  createArray,
  getGoogleCalendarUrl,
  normalizePhoneNumber,
  setAttachmentImageKey,
} from 'src/utils/lib';

const payload = {
  location: 'Moscow',
  action: 'TEMPLATE',
  dates: `${toGoogleDate('2021-09-24T06:00:00.000Z')}/${toGoogleDate(
    '2021-09-24T06:30:00.000Z'
  )}`,
  text: 'SAMMY - appointment',
  details: 'You have scheduled a visit to the specialist Kirill',
};

const attachments = {
  comment: 'any comment',
  files: {
    now: 'https://frank-development.ams3.digitaloceanspaces.com/user/6135fa9d60d47d31f87a223c/1631530573948.jpeg',
    want: 'https://frank-development.ams3.digitaloceanspaces.com/user/6135fa9d60d47d31f87a223c/1631530573948.jpeg',
  },
};

const imageKey = 'user/6135fa9d60d47d31f87a223c/1631530573948';

describe('generating arrays of a given length', () => {
  const length = 4;

  test('should return an empty array with length 1', () => {
    expect(createArray(undefined as never)).toEqual(['']);
  });

  test('should return an empty array with length 4', () => {
    expect(createArray(length)).toEqual(['', '', '', '']);
  });
});

describe('Setting attachment image key', () => {
  test('should return attachments without files if the files are undefined', () => {
    expect(setAttachmentImageKey({ comment: 'some comment' })).toEqual({
      comment: 'some comment',
    });
  });

  test('should return attachments if the files are null', () => {
    expect(
      setAttachmentImageKey({ comment: 'some comment', files: null as never })
    ).toEqual({ comment: 'some comment', files: null });
  });

  test('should correctly set image key', () => {
    expect(setAttachmentImageKey(attachments)).toEqual({
      comment: 'any comment',
      files: { now: `${imageKey}`, want: `${imageKey}` },
    });
  });
});

describe('Removing from phone number extra characters', () => {
  test('should return undefined if the phone number is undefined', () => {
    expect(cleanPhoneNumber(undefined as never)).toBe(undefined);
  });

  test('should return an empty string if the phone number is an empty string', () => {
    expect(cleanPhoneNumber('')).toBe('');
  });

  test('should correctly remove extra characters', () => {
    expect(cleanPhoneNumber('+7908140@7793')).toBe('79081407793');
  });

  test('should correctly return the phone number if the format is number', () => {
    expect(cleanPhoneNumber(79081407793)).toBe('79081407793');
  });

  test('should correctly return the phone number if the format is string', () => {
    expect(cleanPhoneNumber('79081407793')).toBe('79081407793');
  });
});

describe('Normalizing phone number', () => {
  test('should return empty string if the value is an empty string', () => {
    expect(normalizePhoneNumber('')).toBe('');
  });

  test('should return empty string if the value is undefined', () => {
    expect(normalizePhoneNumber(undefined as never)).toBe('');
  });

  test('should correctly return the phone number if the value is in number format', () => {
    expect(normalizePhoneNumber(79081407793)).toBe('+79081407793');
  });

  test('should correctly return the phone number', () => {
    expect(normalizePhoneNumber('79081407793')).toBe('+79081407793');
  });
});

describe('Getting google calendar url with params', () => {
  test('should generate url without params if payload is undefined', () => {
    expect(getGoogleCalendarUrl(GOOGLE_CALENDAR_URL, undefined as never)).toBe(
      'https://calendar.google.com/calendar/render'
    );
  });

  test('should generate url without params if payload is an empty object', () => {
    expect(getGoogleCalendarUrl(GOOGLE_CALENDAR_URL, undefined as never)).toBe(
      'https://calendar.google.com/calendar/render'
    );
  });

  test('should correctly generate url', () => {
    expect(getGoogleCalendarUrl(GOOGLE_CALENDAR_URL, payload)).toBe(
      'https://calendar.google.com/calendar/render?location=Moscow&action=TEMPLATE&dates=20210924T060000Z%2F20210924T063000Z&text=SAMMY+-+appointment&details=You+have+scheduled+a+visit+to+the+specialist+Kirill'
    );
  });
});
