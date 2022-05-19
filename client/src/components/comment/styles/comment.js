import styled from "styled-components";

// desktop
// margin-bottom: 16px
// padding: 12px 0;
export const Container = styled.li`
  display: flex;
  margin-bottom: 16px;
`;
export const RightGroup = styled.div`
  width: 12px;
  margin-left: 16px;
`;

export const IconBtn = styled.button`
  background: transparent;
  border: yellow;
  padding: 0;
  width: 100%;
  margin-top: 9px;
  cursor: pointer;
`;

// left group
// flex-direction: row;
// align-items? justify-content: flex-start
export const LeftGroup = styled.div``;

// container of 42 x 42?
// add margin? padding left 18px
export const ProfilePic = styled.div`
  flex-shrink: 0;
  height: 35px;
  width: 35px;
  border-radius: 35px;
  background-color: red;
`;
// no margin no padding
export const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TextContainer = styled.div`
  margin-left: 10px;
`;

// remove any margins or possibly change to em or span or other inline element
export const Name = styled.h3`
  display: inline;
  margin-right: 5px;
  font-size: 14px;
`;

export const Text = styled.span`
  font-weight: 300;
  font-size: 13px;
  line-height: 1.2;
`;

export const Date = styled.a`
  color: gray;
  font-weight: 300;
  font-size: 12px;
`;

// color: rgba(var(--fe0,0,55,107),1);
// text-decoration: none;
// font-weight: 600;
// remove all padding
// margin-right: 12px;
//     padding: 0;
export const Button = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  color: gray;
  font-weight: 600;
  font-size: 12px;
`;

// margin-top: 16px;
// margin bottom: 4px
// flex-direction: row;
// justify-content: flex-start (group towards left)
export const Info = styled.div`
  margin-top: 16px;
  marginbottom: 4px;
  * {
    padding-right: 10px;
  }
`;

// rgba(var(--f52,142,142,142),1)
// font-weight: 400;

export const ViewReplies = styled.button`
  background: transparent;
  border: none;
  padding-left: 2px;
  margin-top: 16px;
  color: gray;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;

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
