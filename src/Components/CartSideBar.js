import React from 'react';
import './CartSideBar.css';
import CartItemsCard from '../Containers/CartItemsCard';
import items2 from '../items2';


const CartSideBar = (props) => {	
    let sidebarClasses = 'sidebar';

    if (props.show === true) {
      sidebarClasses = 'sidebar open';
    }

    return(
  		<div className={sidebarClasses}>
  			<h1 className=''>Cart</h1>
        <div className='items'>
  			  <ul>
              <li className='cartItemsList'>
                  {props.add.items2.map((user, i) => {
                  return (
                  <div key={i}> 
                  <CartItemsCard className='cartItemsCard'
                    image={items2[i].image}
                    title={items2[i].title} 
                    price={items2[i].price} 
                    tag={items2[i].tag}
                  />
                 </div> 
                );
                })
                }
              </li>
  			  </ul>
        </div>
  			<button className='cart-side-btn' type='button'>Go To Cart</button>
  		</div>
    )
};   


export default CartSideBar;