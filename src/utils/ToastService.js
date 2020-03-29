import { toast } from 'react-toastify';

import { TOAST_MAX_VISIBLE } from '../constants';

/**
 * Simple utility to limit the visible toastify error notifications
 */
class ToastService {
  toasts = [];

  showError(message) {
    if (this.toasts.length >= TOAST_MAX_VISIBLE) {
      const removeId = this.toasts.shift();
      toast.dismiss(removeId);
    }

    const toastId = toast.error(message);
    this.toasts.push(toastId);
  }
}

export default new ToastService();
