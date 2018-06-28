const products = (state = [], action) => {
  switch (action.type) {
    case "PRODUCTS_LOADED":
      return action.payload;
    case "ADD_PROD":
      return [...state, action.payload];
    case "DEL_PROD":
      return state.filter(item => item._id !== action.payload);
    default:
      return state;
  }
};

export default products;
