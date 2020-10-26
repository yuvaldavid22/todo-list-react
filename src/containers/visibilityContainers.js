import { connect } from 'react-redux'
import { setFilter } from '../slices/FilterSlice'
import FilterButton from '../components/FilterButton'

const mapStateToProps = (ownProps) => {
    return {
        filter : ownProps.filter
  }
}

const mapDispatchToProps =  {
  setFilter
}

const VisibilityContainers = connect(mapStateToProps, mapDispatchToProps)(FilterButton)

export default VisibilityContainers