import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { otherBillUser } from '../../actions/bill_actions';
import FriendShow from './friend_show';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  modal: state.ui.modal,
  errors: state.errors.sessionErrors,
});

const mapDispatchToProps = dispatch => ({
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  otherBillUser: (user) => dispatch(otherBillUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendShow);
