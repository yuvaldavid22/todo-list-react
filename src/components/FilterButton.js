import React from "react";

const FilterButton = ({setFilter,filter,children}) => {
    return (
        <button onClick={() => {setFilter(filter)}}>{children}</button>
    )
}

export default FilterButton;