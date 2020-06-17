import React, { Component } from 'react';
import './App.css';
import Insta from '../Containers/Insta';
import items from '../items';
import Cart from '../Containers/Cart';
import CardList from '../Containers/CardList';
import frontcover from '../icons/frontcover.jpg';
import CartSideBar from './CartSideBar';
import SearchBox from '../Containers/SearchBox';

class App extends Component { 
  constructor() {
    super();
    this.state = {
      cartSideBarOpen: true,
      cartItems: [],
      items: items, 
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
  };

  addItemToCart = (product) => {
    const existingProduct = this.state.cartItems.filter((p) => {
      return p.title === product.title;
    });
    const withoutProduct = this.state.cartItems.filter((p) => {
      return p.title !== product.title;
    });
   
    if (existingProduct > 1) {
      console.log(existingProduct);
      this.state.cartItems.push(existingProduct);
      this.setState({cartItems: this.state.cartItems})
    } else {
      this.state.cartItems.push(product);
      this.setState({cartItems: this.state.cartItems})
    }
  };

  addItemToCart2 = (product) => {
    this.state.cartItems.push(product);
    this.setState({cartItems: this.state.cartItems})
  };

  totalItemsInCart = () => {
    const totalItems = this.state.cartItems;
    return totalItems.length;
  };

  totalAmountInCart = () => {
    const cartItems = this.state.cartItems;
    if (!cartItems) {
      return 0;
    } else {
      return this.state.cartItems.reduce((acc, item) => {
        return acc + item.price;
      }, 0);
    }
  };


  render() {  
    const { items, searchfield } = this.state;
    const filteredItems = items.filter(item => {
        return item.title.toLowerCase().includes(searchfield.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchfield.toLowerCase());
    });


    return(
      <div className='app'>
        <div className='cartContainer'>
          <CartSideBar show={this.state.cartSideBarOpen} add={this.state.cartItems} total={this.totalItemsInCart} price={this.totalAmountInCart}/>
        </div>
        <div className='header'>
          <Insta />
          <p className='logo'>HOME SWEET HOME</p>
          <Cart sidebarClick={this.cartToggleClickHandler}/> 
        </div>
        <img alt='' src={frontcover} />
        <div className='search-container'>
          <h2 className='search-items'>Search Items</h2>
          <SearchBox searchChange={this.onSearchChange}/>
        </div>
        <CardList items={filteredItems} addItem={this.addItemToCart}/>
      </div>
    )
  }
};


export default App;
