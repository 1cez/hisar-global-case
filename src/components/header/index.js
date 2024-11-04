import React, { useContext, useState } from "react";

import { HiShoppingCart } from "react-icons/hi";
import * as Styled from "./Header.styled";
import Modal from "components/modal";
import { GlobalContext } from "store/context/contextStore";

const Header = () => {
  const { favoriteCartItems, setFavoriteCartItems } = useContext(GlobalContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <Styled.HeaderWrapper>
      <Styled.HeaderActionsWrapper>
        {isModalOpen && (
          <Modal
            basketProducts={favoriteCartItems}
            setIsModalOpen={setIsModalOpen}
          />
        )}
        <HiShoppingCart
          size={28}
          className="headerActionsShoppingCart"
          onClick={handleModalToggle}
        />
      </Styled.HeaderActionsWrapper>
    </Styled.HeaderWrapper>
  );
};

export default Header;
