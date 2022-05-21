import styled from "styled-components";

export const Container = styled.div`
  display flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
  height: 8vh;
  top: 0px;
`;

export const Text = styled.h3`
  font-size: 16px;
`;

export const IconBtn = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  padding: 0;
`;

export const RightSpace = styled.div`
  width 15px;
  background-color: transparent;
`;
