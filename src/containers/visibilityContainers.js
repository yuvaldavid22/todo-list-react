import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/actions'
import FilterButton from '../components/FilterButton'

const mapStateToProps = (state, ownProps) => {
  console.log("SAdasd")
    return {
    active: ownProps.filter === state.visibilityFilter
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