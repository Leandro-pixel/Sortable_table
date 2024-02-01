import React from 'react'

const SearchBar = ({searchTerm, setSearchTerm}) => {
  return (
    <input 
    className='search-bar'
    type="text" 
    placeholder='Search...'
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    />
  )
}

export default SearchBar