import FriendShowRightColumn from './friend_show_right_column';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { otherBillUser } from '../../actions/bill_actions';
import { fetchFriendHistory } from '../../actions/friendship_actions';
import { fetchBill } from '../../actions/bill_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  modal: state.ui.modal,
  errors: state.errors.sessionErrors,
  friendHistory: state.entities.friendship.friendHistory,
});

const mapDispatchToProps = dispatch => ({
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  otherBillUser: (user) => dispatch(otherBillUser(user)),
  fetchFriendHistory: (id) => dispatch(fetchFriendHistory(id)),
  fetchBill: (id) => dispatch(fetchBill(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendShowRightColumn);
