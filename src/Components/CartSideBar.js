import React from 'react';
import './CartSideBar.css';
import CartItemsCard from '../Containers/CartItemsCard';


const CartSideBar = (props) => {  
    let sidebarClasses = 'sidebar';
    let total = props.total;
    let price = props.price;

    if (props.show === true) {
      sidebarClasses = 'sidebar open';
    }
 
    return(
      <div className={sidebarClasses}>
        <h1 className=''>Cart</h1>
        <div className='items'>
          <ul className='cartItemsCard'>
              <li className='cartItemsList'>
                  {props.add.map((user, i) => {
                  return (
                  <div key={i} className='cartItemsLi'> 
                  <CartItemsCard
                    image={props.add[i].image}
                    title={props.add[i].title} 
                    price={props.add[i].price} 
                    units={props.add[i].units}
                  />
                 </div> 
                ); 
                }) 
                }
              </li>
          </ul> 
        </div>
        <h3 className='total-section'>Total { total() }  |  $ { price() }  </h3>
      </div>
    )
};   


export default CartSideBar;