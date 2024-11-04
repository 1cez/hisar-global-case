import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import * as Styled from "./Modal.styled";

const Modal = ({ setIsModalOpen, basketProducts }) => {
  const [groupedBasketProducts, setGroupedBasketProducts] = useState([]);

  const groupProductsById = (products) => {
    return products.reduce((acc, product) => {
      const existing = acc.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        acc.push({ ...product, quantity: 1 });
      }
      return acc;
    }, []);
  };

  useEffect(() => {
    if (basketProducts) {
      const groupedProducts = groupProductsById(basketProducts);
      setGroupedBasketProducts(groupedProducts);
    }
  }, [basketProducts]);

  const increaseProductById = (id) => {
    setGroupedBasketProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseProductById = (id) => {
    setGroupedBasketProducts((prev) => {
      return prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
    });
  };

  const calculateTotalValue = () => {
    return groupedBasketProducts.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  return (
    <Styled.ModalWrapper>
      <div className="modalXWrapper">
        <button
          aria-label="close-modal"
          className="modalXWrapper"
          onClick={() => setIsModalOpen(false)}
        >
          <AiOutlineClose className="modalXIcon" size={24} />
        </button>
      </div>

      <h3>Basket Items</h3>
      <h5>Total Value: $ {calculateTotalValue().toFixed(2)}</h5>
      <div className="modalBasketItemsWrapper">
        {Array.isArray(groupedBasketProducts) &&
          groupedBasketProducts.length > 0 &&
          groupedBasketProducts.map((basketItem) => (
            <div className="modalBasketItem" key={basketItem.id}>
              <img src={basketItem.images[0]} alt={basketItem.title} />
              <div className="modalBasketItemInfo">
                <span className="modalBasketItemTitle">{basketItem.title}</span>
                <span className="modalBasketItemPrice">{basketItem.price}</span>
              </div>
              <div className="modalBasketItemAction">
                <button
                  className="modalBasketItemActionDecrease"
                  onClick={() => decreaseProductById(basketItem.id)}
                >
                  -
                </button>
                <span>{basketItem.quantity}</span>
                <button
                  className="modalBasketItemActionIncrease"
                  onClick={() => increaseProductById(basketItem.id)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
      </div>
    </Styled.ModalWrapper>
  );
};

export default Modal;
