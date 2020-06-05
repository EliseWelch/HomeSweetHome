import React, { Component } from 'react';
import './App.css';
import Insta from '../Containers/Insta';
import Cart from '../Containers/Cart';
import CardList from '../Containers/CardList';
import items from '../items';
import frontcover from '../icons/frontcover.jpg';
import CartSideBar from './CartSideBar';
import SearchBox from '../Containers/SearchBox';

class App extends Component {	
  constructor() {
    super();
    this.state = {
      cartSideBarOpen: true,
      cartItems: { items },
      items: { items },
      searchfield: ''
     };
  };

  cartToggleClickHandler = () => {
    this.setState((preState) => {
      return { cartSideBarOpen: !preState.cartSideBarOpen };
    })
  };

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { items, searchfield } = this.state;
    const filteredItems = items.filter(item => {
        return item.name.toLowerCase().includes(searchfield.toLowerCase());
    });  

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
        <div className='search-container'>
          <h2 className='search-items'>Search Items</h2>
          <SearchBox searchChange={this.onSearchChange}/>
        </div>
        <CardList items={filteredItems}/>
      </div>
    )
  }
};


export default App;
