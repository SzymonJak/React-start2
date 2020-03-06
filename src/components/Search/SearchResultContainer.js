import {connect} from 'react-redux';
import SearchResult from './SearchResult';
import {
  getSearchString,
  countVisibleCards,
  countAllCards,
  createAction_changeSearchString,
} from '../../redux/searchStringRedux';

const mapStateToProps = (state) => ({
  searchString: getSearchString(state),
  countVisible: countVisibleCards(state),
  countAll: countAllCards(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);