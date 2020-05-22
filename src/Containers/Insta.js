import React from 'react';
import './Insta.css';
import insta from '../icons/insta.png';


const Insta = () => {
	return (
		<div>
		  <a href='https://www.instagram.com/' rel="noopener noreferrer" target='_blank'> 
		    <img className='insta' alt='' src={insta} />
		  </a>  
		</div>
	)
};


export default Insta;