import React from 'react'

const Finder = (props) => {

    const finder = props.finder
    const finderChange = props.finderChange

    return (
        <div>find country<input value={finder} onChange={finderChange}/></div>
    )

}

export default Finder