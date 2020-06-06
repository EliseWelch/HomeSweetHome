import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ items }, props) => {
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
			    addFunc={props.addFunc}
			  />
			 </div> 
			);
		  })
		}
	  </div>
	);
}

export default CardList;