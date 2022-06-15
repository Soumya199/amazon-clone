export const initialState = {
  cart: [],
  user: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_Cart":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "REMOVE_FROM_CART":
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      let newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.log("something went wrong check Remove from cart action");
      }

      return {
        cart: newCart,
      };

      case "SET_USER":
        return{
            ...state,
            user:action.user
        }
        

    default:
      return state;
  }
};

//Selector

export const getCartTotal = (cart) => {
  return cart?.reduce((amount, item) => {
    return item.price + amount;
  }, 0);
};

export default reducer;
