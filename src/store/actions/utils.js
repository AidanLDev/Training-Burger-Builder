import * as actionTypes from './actionTypes';

export const displayToast = (text, level, dissToast) => {
  return {
      type: actionTypes.UTIL_DISPLAY_TOAST,
      text: text,
      level: level,
      dissToast: dissToast
  }
}

export const dismissToast = () => {
  return {
    type: actionTypes.UTIL_DISMISS_TOAST
  }
}