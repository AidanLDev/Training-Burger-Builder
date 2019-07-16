import * as actionTypes from './actionTypes';

export const successToast = (data, text) => {
  return {
      type: actionTypes.UTIL_SUCCESS_TOAST,
      data: data,
      text: text
  }
}

export const dismissToast = () => {
  return {
    type: actionTypes.UTIL_DISMISS_TOAST
  }
}