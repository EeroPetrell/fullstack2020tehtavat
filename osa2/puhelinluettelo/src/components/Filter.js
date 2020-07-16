import React from 'react'

const Filter = (props) => {

    const filter = props.filter
    const filterChange = props.filterChange

    return (
        <div>filter shown with<input value={filter} onChange={filterChange}/></div>
    )

}

export default Filter