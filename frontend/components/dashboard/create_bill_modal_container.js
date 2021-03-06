import { connect } from 'react-redux';
import { createBill } from '../../actions/bill_actions';
import { closeModal } from '../../actions/modal_actions';
import CreateBillModal from './create_bill_modal';
import { searchUsers } from '../../actions/session_actions';
import { clearSearch } from '../../actions/ui_actions';
import { clearOtherBillUser, clearBillErrors } from '../../actions/bill_actions';
import {addFriendship, fetchFriendHistory} from '../../actions/friendship_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  errors: state.errors.billErrors,
  bills: state.entities.bills,
});

const mapDispatchToProps = dispatch => ({
  createBill: (bill) => dispatch(createBill(bill)),
  closeModal: () => dispatch(closeModal()),
  searchUsers: (query) => dispatch(searchUsers(query)),
  clearSearch: () => dispatch(clearSearch()),
  clearOtherBillUser: () => dispatch(clearOtherBillUser()),
  addFriendship: (friendship) => dispatch(addFriendship(friendship)),
  fetchFriendHistory: (id) => dispatch(fetchFriendHistory(id)),
  clearBillErrors: () => dispatch(clearBillErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateBillModal);
