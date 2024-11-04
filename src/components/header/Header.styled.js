import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const HeaderActionsWrapper = styled.div`
  display: flex;
  gap: 8px;
  .headerActionsShoppingCart {
    cursor: pointer;
    &:hover {
      color: red;
      transition: 0.6s;
    }
  }
`;
