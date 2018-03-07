import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'

const modalReducer = (state = null, action) => {
  // debugger
  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return null;
    case RECEIVE_CURRENT_USER:
      return null;
    default:
      return state;
  }

};

export default modalReducer;
