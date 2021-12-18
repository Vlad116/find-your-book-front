import React, { useState } from 'react';
import { StyledSearchBar } from './Styles'

const SearchBar = () => {
	const [searchText, setSearchText] = useState("")
	const searchReq = (text) => {
		console.log(text);
	}
	console.log(searchText)
  	return (
		<StyledSearchBar value={searchText}
			onChange={(newValue) => setSearchText(newValue)}
			onRequestSearch={() => searchReq(searchText)}
		/>
  	);
}

export default React.memo(SearchBar);