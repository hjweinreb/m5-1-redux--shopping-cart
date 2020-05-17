const initialState = {

};

export default function cartReducer(state = initialState, action) {
  console.log("action id", action.item)
  console.log("here is state", state)
  switch (action.type) {
    case 'ADD_ITEM': {
      let newQuantity = 0;
      if (state[action.item.id]) {
        newQuantity = state[action.item.id].quantity + 1
      }
      else {
        newQuantity = 1
      }
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: newQuantity,

        }
      }
    }
    case 'REMOVE_ITEM': {

      const newCart = { ...state };
      delete newCart[action.item];
      return newCart;


      /*  return {
         ...state,
         [action.item.id]: {
           ...action.item,
           
           
           quantity: 0,
           
         }
       } */
    }


    case 'UPDATE_QUANTITY': {
      const { itemId, newQuantity } = action;
      console.log("checking update items", itemId, newQuantity)
      return {
        ...state,
        [itemId]: {
          ...state[itemId],
          quantity: newQuantity,
        },
      };
    }

    default:
      return state;
  }
}

export const getStoreItemArray = state =>
  Object.values(state);

