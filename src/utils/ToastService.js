import React from 'react';
import { toast } from 'react-toastify';

import ConfirmToast from '../components/ConfirmToast/ConfirmToast';
import { TOAST_CONFIG, TOAST_CONTAINERS } from '../constants';

/**
 * Simple utility to wrap around the toastify functionality
 */
class ToastService {
  errorToasts = [];

  dismiss(id) {
    toast.dismiss(id);
  }

  success(text) {
    return toast.success(text, {
      containerId: TOAST_CONTAINERS.MAIN,
      autoClose: TOAST_CONFIG.AUTO_CLOSE_SUCCESS,
    });
  }

  info(text) {
    return toast.info(text, {
      containerId: TOAST_CONTAINERS.MAIN,
      autoClose: false,
    });
  }

  // Limit the visible error toasts and display them in the main container
  error(message) {
    if (this.errorToasts.length >= TOAST_CONFIG.MAX_VISIBLE) {
      const [removeId] = this.errorToasts;
      toast.dismiss(removeId);
    }

    const toastId = toast.error(message, {
      containerId: TOAST_CONTAINERS.MAIN,
    });

    this.errorToasts = [...this.errorToasts.slice(1), toastId];

    return toastId;
  }

  // Display the confirm toasts in the confirm container
  confirm(params) {
    const { text, onConfirm, onCancel } = params;

    const component = (
      <ConfirmToast onConfirm={onConfirm} onCancel={onCancel}>
        {text}
      </ConfirmToast>
    );

    return toast(component, {
      containerId: 'confirm',
    });
  }
}

export default new ToastService();
