import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 735px) {
    padding: 0 20px;
    box-sizing: content-box;
    width: calc(100% - 40px);
    max-width: 935px;
  }
`;

export const Select = styled.div`
  display: flex;
  padding: 10px 20px;
  @media (min-width: 735px) {
    border-top: 1px solid #dbdbdb;
  }
`;

export const Option = styled.button`
  border: none;
  background: transparent;
  flex-grow: 1;
`;
