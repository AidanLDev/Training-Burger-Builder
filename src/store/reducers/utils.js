import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  showToast: false,
  level: '',
  toastMessage: ''
};

const displayToastSuccess = ( state, action ) => {
  return updateObject( state, {
      showToast: true,
      level: 'SUCCESS',
      message: action.text + action.data || 'Success'
    } 
  );
};

const dismissToast = ( state, action ) => {
  return updateObject( state, { showToast: false } );
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
      case actionTypes.UTIL_SUCCESS_TOAST: return displayToastSuccess( state, action );
      case actionTypes.UTIL_DISMISS_TOAST: return dismissToast( state, action );
      default: return state;
  }
};

export default reducer;