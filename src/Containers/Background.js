import React from 'react';
import './Background.css';


const Background = (props) => {
	return(
		<div className='page-background' onClick={props.click}></div>
	)
};


export default Background;