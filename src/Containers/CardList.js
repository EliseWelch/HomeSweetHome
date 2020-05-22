import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ items }) => {
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
			  />
			 </div> 
			);
		  })
		}
	  </div>
	);
}

export default CardList;