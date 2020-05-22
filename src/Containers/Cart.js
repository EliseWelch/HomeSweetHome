import React from 'react';
import './Cart.css';
import cart from '../icons/cart.png';

const Cart = (props) => {
	return (
		<div>
		  <a href='/' onClick={props.sideBarClickHandler}>
		    <img className='cart' alt='' src={cart} />
		  </a>  
		</div>
	)
};


export default Cart;