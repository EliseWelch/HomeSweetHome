import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div style={{textAlign: 'center', display: 'flex', height: '35px', width: '50px'}}>
		  <input 
		    type='search' 
			placeholder='Search Items' 
			onChange={searchChange}
		  />
		</div>
	);
} 


export default SearchBox;