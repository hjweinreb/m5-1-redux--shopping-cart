import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getStoreItemArray } from '../reducers/index';
import CartItem from './CartItem'

import { updateQuantity, removeItem } from '../actions';



//import { getItemArray, getSubtotal } from '../reducers';



import Button from './Button';

const Cart = ({ }) => {
  const state = useSelector(state => state)
  //console.log("here is state", state)
  const items = useSelector(getStoreItemArray);
  //console.log("here is store items", storeItems)
  //const items = useSelector(getItemArray);
  //const subtotal = useSelector(getSubtotal);


  return (
    <Wrapper>
      <Top>
        <Title>Your Cart</Title>

        <ItemList>
          {items.map(item => {
            return (
              <CartItem key={item.id} item={item}></CartItem>
            )
          })}
        </ItemList>
      </Top>
      <Bottom>
        <Total>
          Total:
        </Total>
        <Button>Purchase</Button>
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: sticky;
  top: 0;
  min-width: 300px;
  height: 100vh;
  background: #401f43;
  color: white;
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Top = styled.div`
  max-height: calc(100vh - 240px);
  overflow: auto;
  padding-left: 32px;
  padding-right: 32px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 64px;
  padding-left: 32px;
  padding-right: 32px;
`;

const Title = styled.h2`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 0;
`;

const Subtitle = styled.p`
  margin: 0;
  margin-top: 8px;
  font-size: 16px;
  opacity: 0.75;
`;

const ItemList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  padding-top: 32px;
`;

const Total = styled.div`
  font-size: 22px;
`;
export default Cart;
