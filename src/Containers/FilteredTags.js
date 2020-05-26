import React from 'react';
import './FilteredTags.css';

const FilteredTags = ({ itemsChange }) => {
	return (
		<div className='tags'>
          <button className='tags-btn' onClick={itemsChange}>Kitchen</button>
          <button className='tags-btn' onClick={itemsChange}>Living</button>
          <button className='tags-btn' onClick={itemsChange}>Dining</button>
          <button className='tags-btn' onClick={itemsChange}>Bedroom</button>
          <button className='tags-btn' onClick={itemsChange}>Outside</button>
        </div>
	)
}

export default FilteredTags;