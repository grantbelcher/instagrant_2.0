import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  background-color: rgba( 255, 255, 255), 1);
  border: 1px solid #dbdbdb;
  border: 1px solid rgba( 219, 219, 219), 1);
  border-radius: 3px;
`;
export const Main = styled.main`
  flex: 60%;
  height: 100%;
`;
export const Side = styled.aside`
  flex: 40%;
  height: 100%;
  min-width: 335px;
`;

export const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid rgba(239, 239, 239, 1);
`;
export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 70px;
  width: 85%;
  padding: 10px 10px 10px 10;

  * {
    padding: 2px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`;

export const Author = styled.a`
  font-weight: bold;
`;
export const Location = styled.a`
  font-weight: 300;
  font-size: 12;
  color: gray;
`;

export const ProfilePic = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 35px;
  background-color: red;
`;

export const Options = styled.div`
  height: 35px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const OptionsBtn = styled.button`
  height: 40px;
  width: 40px;
  border: none;
  background-color: transparent;
`;

export const Image = styled.img`
  width: 100%;
  height: ${({ fullHeight }) => (fullHeight ? `100%` : null)};
`;

// height: 170 vs 215

// only add height of 118 & border when viewed as page on desktop, otherwise add height 170? no border
export const Body = styled.div`
  width: 100%;
  height: ${({ deviceType }) => (deviceType === "desktop" ? "118px" : null)};
  padding: 10px;
  border-bottom: ${({ deviceType }) =>
    deviceType === "desktop" ? "1px solid rgba(239, 239, 239, 1);" : null};

  & * {
    margin-bottom: 0.4rem;
  }
`;
export const Icons = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 55px;
  margin-bottom: 0;
`;
export const IconGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > button {
    margin-right: 8px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;
export const Likes = styled.section`
  font-weight: bold;
`;
export const Comments = styled.a`
  color: gray;
`;

// max width of 85% on desktop?
export const Caption = styled.section`
  width: 95%;

  & .handle {
    font-weight: bold;
  }
  & .expand {
    color: gray;
  }
`;
export const PostedAt = styled.a`
  display: block;
  letter-spacing: 0.2px;
  color: gray;
  text-transform: uppercase;
  font-size: 10px;
  margin-top: 0.4rem;
`;

// do not render on mobile
export const NewComment = styled.form`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  height: 50px;
  border-top: black;
  margin-bottom: 0;
`;

export const IconBtn = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  padding: 0;
`;

export const Form = styled.form``;
export const Input = styled.input`
  border: none;
  width: 95%;
  margin-left: 10px;
  &:active {
    border: none;
  }
`;
export const Submit = styled.button`
  border: none;
  background: none;
  color: rgb(0, 149, 246);
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.1px;
`;
