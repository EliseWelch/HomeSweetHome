import React from 'react';
import './CartSideBar.css';


const CartSideBar = (props) => {	
    let sidebarClasses = 'sidebar';
    if (props.show) {
      sidebarClasses = 'sidebar, open';
    }

    return(
  		<div className={sidebarClasses}>
  			<h1 className=''>Cart</h1>
        <div className='items'>
  			  <ul className=''>
  			  </ul>
        </div>
  			<button className='cart-side-btn' type='button'>Go To Cart</button>
  		</div>
    )
};   


export default CartSideBar;