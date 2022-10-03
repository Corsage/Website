import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';

import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/notificationSlice';

import Notification from '../models/notification';

interface Props {
  notification: Notification;
  id: number;
  duration: number;
}

const Toast = ({ notification, id, duration }: Props) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);

  const removeToast = () => {
    // Animation takes 1 second to remove.
    setShow(false);

    const t = setTimeout(() => {
      dispatch(remove(id));
      clearTimeout(t);
    }, 1000);
  };

  useEffect(() => {
    if (show) {
      const t = setTimeout(() => {
        removeToast();
        clearTimeout(t);
      }, duration);
    }
  }, [show]);

  return (
    <div
      className={`flex items-center p-4 space-x-4 w-full max-w-xs bg-dark-cyan rounded-lg divide-x divide-white shadow-lg space-x ${
        show ? 'fade-in' : 'fade-out'
      }`}
      role="alert"
    >
      <div className="text-accent">{notification.icon}</div>
      <div className="pl-4 text-sm text-white font-serif">
        {notification.description}
      </div>
    </div>
  );
};

export default Toast;
