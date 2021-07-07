// File to hold generic constants
export const DEBOUNCE_DELAY = 500;

export const POLLING_DELAY = 30000;

export const TOAST_CONFIG = {
  AUTO_CLOSE: 5000,
  // Internal constant used in ToastService
  MAX_VISIBLE: 2,
  AUTO_CLOSE_SUCCESS: 2500,
};

// Using two toast containers to achieve different behavior and positioning
export const TOAST_CONTAINERS = {
  MAIN: 'main',
  CONFIRM: 'confirm',
};
