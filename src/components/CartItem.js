import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getStoreItemArray } from '../reducers/index';

import { updateQuantity, removeItem } from '../actions';


const CartItem = ({ item }) => {
  const itemQuantity = useSelector((state) => state)
  console.log("item", item)
    ;
  const dispatch = useDispatch();

  // console.log("here is itemQuantity", itemQuantity)



  return (

    <div>

      <span>{item.id}</span>
      <textarea value={item.quantity} onChange={(ev) => dispatch(updateQuantity(item.id, ev.target.value))}></textarea>

      <button onClick={() => dispatch(removeItem(item.id))
      }>remove</button>

    </div>
  );
};

export default CartItem;