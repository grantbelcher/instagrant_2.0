import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 100%;
  justify-content: center;
  letter-spacing: 1px;
  text-align: center;
  @media (min-width: 735px) {
    border-top: 1px solid #dbdbdb;
  }
`;

export const Option = styled.button`
  border: none;
  background: transparent;
  flex-grow: 1;
`;

export const Post = styled.img`
  width: 31%;
  margin: 1% 1%;
`;

export const Row = styled.div`
  width: 100%;
  @media (min-width: 736px) {
    margin-bottom: 28px;

    display: flex;
    justify-content: space-around;
  }
`;
