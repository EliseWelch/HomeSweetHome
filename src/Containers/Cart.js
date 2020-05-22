import React from 'react';
import './Cart.css';

const Cart = (props) => {
	return (
		<div className='cart-container'>
		  <button className='cart-btn' href='/' onClick={props.sideBarClickHandler}>
		  	<p>0</p>
		  </button>  
		</div>
	)
};

 
export default Cart;