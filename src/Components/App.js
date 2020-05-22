import React, { Component } from 'react';
import './App.css';
import Insta from '../Containers/Insta';
import Cart from '../Containers/Cart';
import CardList from '../Containers/CardList';
import items from '../items';
import frontcover from '../icons/frontcover.jpg';
import CartSideBar from './CartSideBar';


class App extends Component {	
  state = {
    cartSideBarOpen: false
  };

  cartToggleClickHandler = () => {
    this.setState((preState) => {
      return {cartSideBarOpen: !preState.cartSideBarOpen};
    })
  };

  render() {
    let cartSideBar;

    if (this.state.cartSideBarOpen) {
      cartSideBar = <CartSideBar />
    }

    return(
      <div className="app">
        <div className='open'>
          {cartSideBar}
        </div>
        <div className='header'>
          <Insta />
          <p className='logo'>HOME SWEET HOME</p>
          <Cart sideBarClickHandler={this.cartToggleClickHandler}/>
        </div>
        <img alt='' src={frontcover} />
        <div className='tags'>
          <h3>Kitchen</h3>
          <h3>Bedroom</h3>
          <h3>Dining</h3>
          <h3>Outside</h3>
          <h3>Living</h3>
        </div>
        <CardList items={ items } />
      </div>
    )
  }
};


export default App;
