import { createSlice } from "@reduxjs/toolkit";
const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    totalAmounts: 0,
    totalItems: 0,
  },
  reducers: {
    // add to cart
    addToCart(state, action) {
      const existingProduct = state.data.find(
        (product) => product.Id === action.payload.id
      );
      if (existingProduct) {
        const temptCart = state.data.map((product) => {
          if (product.id === action.payload.id) {
            let newQty = product.quantity + action.payload.quantity;
            let newTotalPrice = newQty + product.totalPrice;

            return {
              ...product,
              quantity: newQty,
              totalPrice: newTotalPrice,
            };
          } else {
            return product;
          }
        });
        state.data = temptCart;
        storeInLocalStorage(state.data);
      } else {
        state.data.push(state.data);
        storeInLocalStorage(state.data);
      }
    },

    // update quantity
    updateQuantity: (state, data) => {},
    // Remove quantity
    removeItem: (state, data) => {},
    // get cart total
    getCartTotal: (state, data) => {},
  },
});


export const { addToCart, updateQuantity,removeItem,getCartTotal, RESET } = cartSlice.actions;
export default cartSlice.reducer;