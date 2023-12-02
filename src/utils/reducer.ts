import { Notification } from 'src/types';

export const saveParams = <T extends { _id: string }, K>(
  items: T[],
  id: string,
  payload?: K
) => items?.map((obj) => (obj._id === id ? { ...obj, ...payload } : obj));

export const removeItemById = <T extends { _id: string }>(
  items: T[],
  _id: string
) => items?.filter((el) => el._id !== _id);

export const handleMessages = (obj: Notification, data: Notification[]) => {
  if (data.length === 0) {
    return [...data, obj];
  }

  return data.map((el) => (el.id === obj.id ? el : obj));
};

export const removeMessage = (data: Notification[], id: string) =>
  data.filter((el) => el.id !== id);
