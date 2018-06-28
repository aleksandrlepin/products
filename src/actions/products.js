import Api from "../api/Api";

export const getProd = () => {
  return dispatch => {
    return Api.get("products")
      .then(products => {
        dispatch(loadProd(products));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const loadProd = products => ({
  type: "PRODUCTS_LOADED",
  payload: products.products
});

export const postProd = prod => {
  return dispatch => {
    return Api.post(prod)
      .then(createdProd => {
        if (createdProd.error) {
          return;
        }
        dispatch(addProd(createdProd));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const addProd = prod => ({
  type: "ADD_PROD",
  payload: prod.createdProduct
});

export const delProd = queryObj => {
  return dispatch => {
    return Api.delete(queryObj)
      .then(deletedProd => {
        console.log("deletedProd: ", deletedProd);
        if (deletedProd.error) {
          return;
        }
        console.log("deletedProd._id: ", deletedProd._id);
        dispatch(rmProd(deletedProd.deletedProduct._id));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const rmProd = id => ({
  type: "DEL_PROD",
  payload: id
});
