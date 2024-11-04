import styled from "styled-components";

export const ProductFilterWrapper = styled.div`
  width: 20%;
  position: sticky;
  top: 0;
  height: 100vh;

  @media (max-width: 1200px) {
    height: auto;
    width: auto;
    position: relative;
  }

  .productFilterContainer {
    width: 100%;
    border-radius: 6px;
    padding: 8px;

    .productFilter {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }
`;
