import { describe, expect, test } from 'vitest';

import {
  cleanPhoneNumber,
  createArray,
  normalizePhoneNumber,
  setAttachmentImageKey,
} from 'src/utils/lib';

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
