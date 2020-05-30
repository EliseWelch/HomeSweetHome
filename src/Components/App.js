import React, { Component } from 'react';
import './App.css';
import Insta from '../Containers/Insta';
import Cart from '../Containers/Cart';
import CardList from '../Containers/CardList';
import items from '../items';
import items2 from '../items2';
import frontcover from '../icons/frontcover.jpg';
import CartSideBar from './CartSideBar';
import Background from '../Containers/Background';

class App extends Component {	
  constructor() {
    super();
    this.state = {
      cartSideBarOpen: false,
      cartItems: { items2 }
     }
  }

  cartToggleClickHandler = () => {
    this.setState((preState) => {
      return { cartSideBarOpen: !preState.cartSideBarOpen };
    })
  };

  backgroundClickHandler = () => {
    this.setState({ cartSideBarOpen: false })
  };

  render() {
    let background;

    if (this.state.cartSideBarOpen) {
      background = <Background click={this.backgroundClickHandler} />
    }

    return(
      <div className='app'>
        <CartSideBar show={this.state.cartSideBarOpen} add={this.state.cartItems}/>
        <div className='header'>
          <Insta />
          <p className='logo'>HOME SWEET HOME</p>
          <Cart sideBarClickHandler={this.cartToggleClickHandler}/> 
        </div>
        <img alt='' src={frontcover} />
        <CardList items={ items } />
        {background}
      </div>
    )
  }
};


export default App;
