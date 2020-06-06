import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className='inputBoxContainer'> 
		  <input className='inputBox'
		    type='search' 
			placeholder='Search Items' 
			onChange={searchChange}
		  />
		</div>
	);
} 


export default SearchBox;