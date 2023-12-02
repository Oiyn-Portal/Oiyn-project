import { useDispatch } from 'react-redux';

import { actions } from 'src/actions';
import { Notification } from 'src/types';
import { generateID } from 'src/utils/lib';

type BaseProps = Omit<Notification, 'id' | 'type' | 'position'>;

export const useNotifications = () => {
  const dispatch = useDispatch();

  const addNotification = (type: Notification['type'], props: BaseProps) =>
    dispatch(
      actions.ui.notifications.addNotification({
        id: generateID(),
        position: 'top',
        type,
        ...props,
      })
    );

  return {
    error: (props: BaseProps) => addNotification('ERROR', props),
    success: (props: BaseProps) => addNotification('SUCCESS', props),
  };
};
