import React from 'react';
import "./Bag.css";
import BagItems from '../BagItems/BagItems';
import BagDetails from '../BagDetails/BagDetails';
import { useSelector } from 'react-redux';

function Bag() {
  const bagItems =useSelector(store=>store.bag);
  const items =useSelector(store=>store.items);
  const finalItems = items.filter((item)=>{
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex>=0;
  });
  return (
    <main>
      <div class="bag-page">
        <div class="bag-items-container">
          {finalItems.map((item)=> <BagItems key={item.id} item={item} />)}  
        </div>
        <BagDetails /> 
      </div>
    </main>
  )
}

export default Bag
