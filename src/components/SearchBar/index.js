import React, { useState } from 'react';
import { StyledSearchBar } from './Styles'

const SearchBar = ({ searchQuery, setSearchQuery}) => {
  	return (
		<StyledSearchBar value={searchQuery}
			onChange={(newValue) => console.log(newValue)}
			onRequestSearch={(newValue) => setSearchQuery(newValue)}
		/>
  	);
}

export default React.memo(SearchBar);