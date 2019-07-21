import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  showToast: false,
  level: '',
  message: '',
  dissToast: false
};

const displayToast = ( state, action ) => {
  return updateObject( state, {
      showToast: true,
      level: action.level,
      message:  action.text || 'Success',
      dissToast: action.dissToast
    } 
  );
};

const dismissToast = ( state, action ) => {
  return updateObject( state, { showToast: false } );
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
      case actionTypes.UTIL_DISPLAY_TOAST: return displayToast( state, action );
      case actionTypes.UTIL_DISMISS_TOAST: return dismissToast( state, action );
      default: return state;
  }
};

export default reducer;