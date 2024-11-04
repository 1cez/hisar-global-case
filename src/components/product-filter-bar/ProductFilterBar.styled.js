import styled from "styled-components";

export const ProductFilterBar = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  border-radius: 8px;
  padding: 8px;
  position: relative;

  .productFilterIcon {
    &:hover {
      opacity: 0.7;
      transition: 0.3s;
      cursor: pointer;
    }
  }
`;

export const ProductFilterDropdown = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  background: white;
  border: 1px solid lightgray;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1;
  padding: 8px;
  display: flex;
  flex-direction: column;
`;
