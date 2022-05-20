import styled from "styled-components";

export const Container = styled.ul`
  padding: 0;
  margin-left: 44px;
`;
export const ViewBtn = styled.button`
  background: transparent;
  border: none;
  padding-left: 2px;
  margin-top: 16px;
  color: gray;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;

  * {
    font-size: 12px;
  }

  div {
    height: 1px;
    width: 20px;
    background: gray;
    margin-right: 15px;
  }
`;
