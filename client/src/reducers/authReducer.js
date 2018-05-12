import isEmpty from '../validation/is-empty';
import Store from '../store/auth';

import { SET_CURRENT_USER } from '../actions/types';

const initialState = Store;

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      }
    default:
      return state;
  }
}