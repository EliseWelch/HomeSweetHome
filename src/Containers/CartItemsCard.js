import React from 'react';
import './CartItemsCard.css';


const CartItemsCard = ({ image, title, price }) => {
	return (
		<div className='cartItemsCard'>
		    <div className='addedItems'>
		      <img className='addedItemPhoto' alt='' src={ image } />
		      <div className='cart-text'>
		        <h2>{ title }</h2>
		        <p>{ price }</p>
		      </div>
		    </div>
		</div>
	); 
}
 

export default CartItemsCard;