import React, { useContext, useState } from "react";
import { BiCartAdd } from "react-icons/bi";
import { GlobalContext } from "store/context/contextStore";
import * as Styled from "./ProductCard.styled";

const ProductCard = ({ product }) => {
  const { setFavoriteCartItems } = useContext(GlobalContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleFavoriteItem = (prod) => {
    setFavoriteCartItems((prevFavoriteCart) => [...prevFavoriteCart, prod]);
  };

  return (
    <Styled.ProductCardWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      isHovered={isHovered}
    >
      <img src={product.images[0]} alt={product.id} loading="lazy" />
      <BiCartAdd
        size={26}
        onClick={() => handleFavoriteItem(product)}
        className="productCardAdd"
      />
      <Styled.ProductCardInfo>
        <span className="productCardTitle">{product.title}</span>
        <span className="productCardPrice">{product.price}</span>
      </Styled.ProductCardInfo>
    </Styled.ProductCardWrapper>
  );
};

export default ProductCard;
