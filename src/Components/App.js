import React, { Component } from 'react';
import './App.css';
import Insta from '../Containers/Insta';
import Cart from '../Containers/Cart';
import CardList from '../Containers/CardList';
import items from '../items';
import products from '../products';
import frontcover from '../icons/frontcover.jpg';
import CartSideBar from './CartSideBar';

class App extends Component {	
  constructor() {
    super();
    this.state = {
      cartSideBarOpen: false,
      cartItems: { products }
     }
  }

  cartToggleClickHandler = () => {
    this.setState((preState) => {
      return { cartSideBarOpen: !preState.cartSideBarOpen };
    })
  };

  render() {
    return(
      <div className='app'>
        <div className='cartContainer'>
          <CartSideBar show={this.state.cartSideBarOpen} add={this.state.cartItems}/>
        </div>
        <div className='header'>
          <Insta />
          <p className='logo'>HOME SWEET HOME</p>
          <Cart sideBarClickHandler={this.cartToggleClickHandler}/> 
        </div>
        <img alt='' src={frontcover} />
        <CardList items={ items } />
      </div>
    )
  }
};


export default App;
