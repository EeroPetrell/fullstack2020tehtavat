import React from 'react'

const Search = ({ handleSearch, search }) => {
    return (
        <div>
            search<input value={search} onChange={handleSearch} />
        </div>
    )
}

export default Search