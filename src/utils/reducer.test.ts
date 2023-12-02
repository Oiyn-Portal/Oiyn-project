import { describe, expect, test } from 'vitest';

import { Notification } from 'src/types';
import {
  handleMessages,
  removeItemById,
  removeMessage,
  saveParams,
} from 'src/utils/reducer';

const data = { _id: '12345', name: 'Daniel', phone: '+7 908 140 7794' };

const payload = { ...data, phone: '+7 908 140 7793' };

const store = [data];

const notification: Notification = {
  id: '1641979624549',
  type: 'ERROR',
  title: { id: 'events.error.phone.required' },
  message: { id: 'events.error.phone.required' },
  position: 'top',
};

const notifications: Notification[] = [
  {
    id: '16431979624549',
    type: 'ERROR',
    title: { id: 'events.error.phone.required' },
    message: { id: 'events.error.phone.required' },
    position: 'top',
  },
];

describe('Updating data in store', () => {
  test('should return undefined if the store is undefined', () => {
    expect(saveParams(undefined as never, data._id)).toBe(undefined);
  });

  test('should return store if the _id is undefined', () => {
    expect(saveParams(store, undefined as never, payload)).toEqual(store);
  });

  test('should return undefined if the incoming params are undefined', () => {
    expect(
      saveParams(undefined as never, undefined as never, undefined as never)
    ).toEqual(undefined);
  });

  test('should correctly save the store data', () => {
    expect(saveParams(store, data._id, payload)).toEqual([
      { ...data, phone: '+7 908 140 7793' },
    ]);
  });
});

describe('Removing data in store', () => {
  test('should return undefined if the store is undefined', () => {
    expect(removeItemById(undefined as never, data._id)).toBe(undefined);
  });

  test('should return store if the _id is undefined', () => {
    expect(removeItemById(store, undefined as never)).toEqual(store);
  });

  test('should return undefined if the incoming params are undefined', () => {
    expect(removeItemById(undefined as never, undefined as never)).toEqual(
      undefined
    );
  });

  test('should correctly remove data in the store', () => {
    expect(removeItemById(store, data._id)).toEqual([]);
  });
});

describe('Handling notifications massages', () => {
  test('should correctly return a formed array of notifications', () => {
    expect(handleMessages(notification, notifications)).toEqual([
      {
        id: '1641979624549',
        message: { id: 'events.alerts.errorMessage' },
        position: 'top',
        title: { id: 'events.alerts.errorTitle' },
        type: 'ERROR',
      },
    ]);
  });

  test('should return an array of notifications if the incoming array of objects is empty', () => {
    expect(handleMessages(notification, [])).toEqual([
      {
        id: '1641979624549',
        message: { id: 'events.alerts.errorMessage' },
        position: 'top',
        title: { id: 'events.alerts.errorTitle' },
        type: 'ERROR',
      },
    ]);
  });

  test('should return an empty array if both arguments are empty', () => {
    expect(handleMessages({} as never, [])).toEqual([{}]);
  });

  test('should return an undefined if notification are empty array', () => {
    expect(handleMessages(undefined as never, [])).toEqual([undefined]);
  });
});

describe('Removing messages', () => {
  test('should return an empty array if id is the same', () => {
    expect(removeMessage(notifications, '16431979624549')).toEqual([]);
  });

  test('should return an array of notifications if the id are not equal', () => {
    expect(removeMessage(notifications, '1643197962454')).toEqual([
      {
        id: '16431979624549',
        message: { id: 'events.alerts.errorMessage' },
        position: 'top',
        title: { id: 'events.alerts.errorTitle' },
        type: 'ERROR',
      },
    ]);
  });

  test('should return an array of notifications if the id empty', () => {
    expect(removeMessage(notifications, undefined as never)).toEqual([
      {
        id: '16431979624549',
        message: { id: 'events.alerts.errorMessage' },
        position: 'top',
        title: { id: 'events.alerts.errorTitle' },
        type: 'ERROR',
      },
    ]);
  });
});
