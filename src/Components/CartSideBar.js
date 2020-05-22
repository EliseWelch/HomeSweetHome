import React, { Component } from 'react';
import './CartSideBar.css';


class CartSideBar extends Component {	
  render() {
    return(
  		<div className='sidebar'>
  			<h1 className=''>Cart</h1>
        <div className='items'>
  			  <ul className=''>
  			  </ul>
        </div>
  			<button className='' type='button'>Go To Cart</button>
  		</div>
    )
  }
};   


export default CartSideBar;