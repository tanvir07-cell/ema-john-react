import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItems.css";
const ReviewItems = (props) => {
  const { product, removeHandleClick } = props;
  const { name, img, price, shipping, quantity } = product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-item-details-container">
        <div className="review-item-details">
          <p className="product-name">{name}</p>
          <p>
            <span className="orange-color">price : ${price}</span>
          </p>
          <p>
            <small>Shipping : {shipping}</small>
          </p>
          <p>
            <small>Quantity : {quantity}</small>
          </p>
        </div>
        <div className="delete-container">
          <button
            className="delete-button"
            onClick={() => removeHandleClick(product)}
          >
            <FontAwesomeIcon
              className="delete-icon"
              icon={faTrashAlt}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItems;
