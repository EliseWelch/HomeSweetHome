import React, { Component } from 'react';
import './App.css';
import Insta from '../Containers/Insta';
import Cart from '../Containers/Cart';
import CardList from '../Containers/CardList';
import items from '../items';
import frontcover from '../icons/frontcover.jpg';
import CartSideBar from './CartSideBar';


class App extends Component {	
  constructor() {
    super()
    this.state = {
      cartSideBarOpen: false,
      items: [],
      tag: ''
    }
  }

  cartToggleClickHandler = () => {
    this.setState((preState) => {
      return {cartSideBarOpen: !preState.cartSideBarOpen};
    })
  };

  backgroundClickHandler = () => {
    this.setState({cartSideBarOpen: false});
  };

  render() {
    let cartsidebar;

    if (this.state.cartSideBarOpen) {
      cartsidebar = <CartSideBar />
    }

    return(
      <div className="app" onClick={this.state.backgroundClickHandler}>
        <div className='open'>
          {cartsidebar}
        </div>
        <div className='header'>
          <Insta />
          <p className='logo'>HOME SWEET HOME</p>
          <Cart sideBarClickHandler={this.cartToggleClickHandler}/>
        </div>
        <img alt='' src={frontcover} />
        <CardList items={ items } onClick={this.state.backgroundClickHandler}/>
      </div>
    )
  }
};


export default App;
