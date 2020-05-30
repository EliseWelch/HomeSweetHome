import React from 'react';
import './CartItemsCard.css';


const CartItemsCard = ({ image, title, price, tag }) => {
	return (
		<div className='cartItemsCard'>
		    <div className='addedItems'>
		      <img className='addedItemImage' alt='' src={ image } />
		      <h2>{ title }</h2>
		      <p>{ price }</p>
		      <p>{ tag }</p>
		    </div>
		</div>
	); 
}


export default CartItemsCard;