import React from "react";

const FilterButton = ({children, onClick }) => {
    return (
        <button onClick={onClick}>{children}</button>
    )
}

export default FilterButton;