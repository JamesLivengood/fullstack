import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import AddFriendModal from './add_friend_modal';
import { searchUsers } from '../../actions/session_actions';
import { clearSearch } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  searchUsers: (query) => dispatch(searchUsers(query)),
  clearSearch: () => dispatch(clearSearch()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddFriendModal);
