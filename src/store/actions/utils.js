import * as actionTypes from './actionTypes';

export const successToast = () => {
  return {
      type: actionTypes.UTIL_SUCCESS_TOAST
  }
}

export const dismissToast = () => {
  return {
    type: actionTypes.UTIL_DISMISS_TOAST
  }
}