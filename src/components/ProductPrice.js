import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_ORDER, ResetProduct } from "../redux/actions/action";
import Cardsdata from "./CardData";

const ProductPrice = ({ data, quantity, setProductItem }) => {
  const [totalprice, setTotalprice] = useState(0);

  const cartItem = useSelector((state) => state.cartreducer.carts);
  const dispatch = useDispatch();

  const totalAmount = () => {
    let price = 0;
    data.map((item) => {
      price = item.price * item.qnty + price;
    });
    setTotalprice(price);
  };
  const history = useNavigate();

  const orderHandler = (cartItem) => {

    dispatch(ADD_TO_ORDER(cartItem, totalprice))
    setTimeout(() => {
      history("/orderpage");
    })
    dispatch(ResetProduct())
    setProductItem(JSON.parse(JSON.stringify(Cardsdata)),)
  }
  useEffect(() => {
    totalAmount();
  }, [quantity]);



  return (
    <>
      <div>
        <hr />
        <span className="sub-total">SubTotal:</span>
        <br />
        {data.map((item) => {
          return (
            <div>
              <span className="item-name">-{item.rname}:</span>
              <span className="item-price">Rs.{item.price}</span>
              <span className="multi">*</span>
              <span className="qnty">{item.qnty}</span>=
              <span className="multiply">
                Rs.{item.price * item.qnty}
                <br></br>
              </span>
            </div>
          );
        })}
        <br></br><span className="grand-total">Grand Total:Rs.{totalprice}</span>
        <button
          onClick={() => orderHandler(cartItem)}
          className="add_cart butn"
          type="button"
        >
          Order Placed
        </button>
      </div>

    </>
  );
};

export default ProductPrice;
