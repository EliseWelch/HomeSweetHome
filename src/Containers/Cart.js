import React from 'react';
import './Cart.css';

const Cart = (props) => {
	return (
		<div className='cart-container'>
		  <button className='cart-btn' href='/' onClick={props.sidebarClick}>
		  </button>  
		</div>
	)
};

 
export default Cart;