import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ items, addItem }) => {
	return (
	  <div className='cardlist'>
		{
		  items.map((user, i) => {
			return (
			  <div key={i}>	
			  <Card  
			    image={items[i].image}
			    title={items[i].title} 
			    price={items[i].price} 
			    tag={items[i].tag}
			    addItem={addItem}
			  />
			 </div> 
			);
		  })
		}
	  </div>
	);
}

export default CardList;