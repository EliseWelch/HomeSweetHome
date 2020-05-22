import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ items }) => {
	return (
	  <div className='cardlist' key={i}>
		{
		  items.map((user, i) => {
			return (
			  <div>	
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