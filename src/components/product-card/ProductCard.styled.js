import styled from "styled-components";

export const ProductCardWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgba(128, 128, 128, 0.2);
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  background-color: ${({ isHovered }) =>
    isHovered ? "#D3D3D3" : "transparent"};
  transition: background-color 0.6s ease;
  max-height: 200px;

  & img {
    width: fit-content;
    height: 120px;
  }
  .productCardAdd {
    position: absolute;
    top: 16px;
    right: 16px;
    &:hover {
      color: green;
    }
  }
`;

export const ProductCardInfo = styled.div`
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 6px;
  margin-top: 8px;

  .productCardTitle {
    font-weight: 500;
    font-size: 13px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
  }
  .productCardPrice {
    font-weight: 500;
    font-size: 12px;
    color: gray;
  }
  .productCardDescription {
    font-weight: 600;
    font-size: 12px;
    color: white;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
