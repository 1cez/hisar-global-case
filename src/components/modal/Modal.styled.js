import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 400px;
  background-color: white;
  box-shadow: 4px 0 15px rgba(0, 0, 0, 0.3);
  z-index: 9999;
  padding: 20px;
  overflow: auto;

  .modalXWrapper {
    position: absolute;
    top: 16px;
    right: 16px;
    & button {
      outline: none;
      background: none;
      border: none;
    }
    .modalXIcon {
      &:hover {
        opacity: 0.4;
        transition: 0.3s;
        cursor: pointer;
      }
    }
  }
  .modalBasketItemsWrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
    .modalBasketItem {
      border-bottom: 1px solid lightgray;
      padding-bottom: 8px;
      position: relative;
      & img {
        width: 80px;
        height: 80px;
        border-radius: 8px;
      }
      .modalBasketItemInfo {
        display: flex;
        flex-direction: column;
        gap: 4px;
        .modalBasketItemTitle {
          font-size: 13px;
          font-weight: 600;
        }
        .modalBasketItemPrice {
          font-size: 11px;
          font-weight: 300;
          color: gray;
        }
      }
      .modalBasketItemAction {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        gap: 8px;
        & button {
          width: 24px;
          color: white;
          font-size: 16;
          font-weight: 600;
          outline: none;
          border: none;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 20px;
          &:hover {
            cursor: pointer;
            opacity: 0.6;
            transition: 0.6s;
          }
        }
        .modalBasketItemActionDecrease {
          background-color: red;
        }
        .modalBasketItemActionIncrease {
          background-color: green;
        }
      }
    }
  }
`;
