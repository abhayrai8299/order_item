import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_TO_CART,
  ADJUST_QNTY_ITEM,
  REMOVE_FROM_CART,
} from "../redux/actions/action";
const SingleProduct = ({ prod, productItem }) => {

  const cartitem = useSelector((state) => state.cartreducer.carts);
  const dispatch = useDispatch();

  const addnadjustHandler = (item) => {
    productItem.map((item) => {
      if (item.id === prod.id) {
        prod.qnty = prod.qnty + 1;
      }
    });
    dispatch(ADD_TO_CART(item));

  };

  const addHandler = (item) => {
    productItem.map((item) => {
      if (item.id === prod.id) {
        prod.qnty = 1;
      }
    });
    dispatch(ADD_TO_CART(item));
  };

  const removefromcartHandler = (id) => {
    dispatch(REMOVE_FROM_CART(id));

  };
  const adjustQntyHandler = (item) => {
    productItem.map((item) => {
      if (item.id === prod.id) {
        prod.qnty = prod.qnty - 1;
      }
    });
    dispatch(ADJUST_QNTY_ITEM(item));
  };

  return (
    <div className="product-card">
      <h6 className="heading">{prod.rname}</h6>
      <img
        aria-hidden
        className="product-image"
        src={prod.imgdata}
        alt="image"
      />
      <br></br>
      <span className="price">Price :Rs.{prod.price}</span>
      <br></br>
      {cartitem.some((p) => p.id === prod.id) && prod.qnty > 0 ? (
        <div className="button">
          <button className="add-removes">
            <span
              className="dec"
              onClick={
                prod.qnty <= 1
                  ? () => removefromcartHandler(prod.id)
                  : () => adjustQntyHandler(prod)
              }
            >
              -
            </span>
            <span className="num">{prod.qnty}</span>
            <span className="inc" onClick={() => addnadjustHandler(prod)}>
              +
            </span>
          </button>
        </div>
      ) : prod.qnty > 1 ? (
        <div className="button">
          <button className="add-removes">
            <span
              className="dec"
              onClick={
                prod.qnty <= 1
                  ? () => removefromcartHandler(prod.id)
                  : () => adjustQntyHandler(prod)
              }
            >
              -
            </span>
            <span className="num">{prod.qnty}</span>
            <span className="inc" onClick={() => addnadjustHandler(prod)}>
              +
            </span>
          </button>
        </div>
      ) : (
        <div className="btn">
          <button className="add_cart" onClick={() => addHandler(prod)}>
            Add to Cart
          </button>
        </div>
      )}
      <br></br>

    </div>
  );
};

export default SingleProduct;
