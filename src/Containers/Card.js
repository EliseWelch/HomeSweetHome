import React from 'react';
import './Card.css';

const Card = ({ image, title, price, tag }) => {
	return (
		<div className='card'>
		    <div className='card-items'>
		      <img className='image' alt='' src={ image } />
		      <h2>{ title }</h2>
		      <p>{ price }</p>
		      <p>{ tag }</p>
		    </div>
		</div>
	);
}


export default Card;




