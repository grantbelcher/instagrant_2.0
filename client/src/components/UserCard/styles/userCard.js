import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 40px;
  background-color: red;
  margin-right: 12px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Main = styled.a`
  font-weight: 600;
`;

export const Sub = styled.p`
  margin: 0;
  margin-top: 4px;
  color: #8e8e8e;
`;

export const Time = styled.span`
  color: #8e8e8e;
`;

export const Notification = styled.div``;

export const FollowBtn = styled.button`
  background-color: ${({ following }) =>
    following ? "transparent" : "#0095f6"};
  border: ${({ following }) =>
    following ? " 1px solid rgba(219, 219, 219, 1)" : "none"};
  color: ${({ following }) => (following ? "black" : "#fff")};

  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  padding: 7px 12px;
  text-align: center;
`;
