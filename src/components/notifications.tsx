import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

import Notification from '../models/notification';
import Toast from './toast';

const Notifications = () => {
  const toasts: Map<number, Notification> = useSelector(
    (state: RootState) => state.notification.notificationList
  );

  return (
    <div
      style={styles.container}
      className="fixed flex items-center flex-col gap-3 z-50 left-1/2 transform -translate-x-1/2"
    >
      {Array.from(toasts).map((toast) => {
        return (
          <Toast
            key={toast[0]}
            id={toast[0]}
            notification={toast[1]}
            duration={3000}
          />
        );
      })}
    </div>
  );
};

const styles = {
  container: {
    minWidth: 310
  }
};

export default Notifications;
