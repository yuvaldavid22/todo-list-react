import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/actions'
import FilterButton from '../components/FilterButton'

const mapStateToProps = (state, ownProps) => {
    return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const VisibilityContainers = connect(mapStateToProps, mapDispatchToProps)(FilterButton)

export default VisibilityContainers