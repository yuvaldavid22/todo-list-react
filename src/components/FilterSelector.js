import React from 'react'
import VisibilityContainers from '../containers/visibilityContainers'
import { VisibilityFilters } from '../actions/actions'

const FilterSelector = () => (
    <div>
    <VisibilityContainers filter={VisibilityFilters.ALL}>All</VisibilityContainers>
    <VisibilityContainers filter={VisibilityFilters.UNCOMPLETED}>Active</VisibilityContainers>
    <VisibilityContainers filter={VisibilityFilters.COMPLETED}>Completed</VisibilityContainers>
  </div>
)

export default FilterSelector