import React from 'react';
import "./HomeItem.css";
import { useDispatch } from 'react-redux';
import { bagActions } from '../../store/bagSlice';

function HomeItem({item}) {
  const dispatch = useDispatch();
  const addItemToBag=(id)=>{
    dispatch(bagActions.addToBag(id));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      <button className="btn-add-bag" onClick={()=>addItemToBag(item.id)}>Add to Bag</button>
    </div>
  )
}

export default HomeItem
