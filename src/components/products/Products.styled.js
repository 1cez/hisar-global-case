import styled from "styled-components";

export const ProductsWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 32px;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 0px;
  }
  
`;

export const ProductItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const ProductItemsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  height: 400px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Error = styled.div`
  color: red;
  font-weight: 600;
  font-size: 18px;
`;

export const NoProductsWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  & img {
    width: 700px;
    height: 400px;
  }
`;
