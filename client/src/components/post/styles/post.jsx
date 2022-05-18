import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 700px;
  background-color: rgba( 255, 255, 255), 1);
  border: 1px solid #dbdbdb;
  border: 1px solid rgba( 219, 219, 219), 1);
  border-radius: 3px;
`;
export const Main = styled.div``;
export const Side = styled.div``;
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
`;

// 165
export const Body = styled.div`
  width: 100%;
  height: 215px;
  padding: 10px;
`;
export const Icons = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 55px;
  padding-right: 0 10px;
`;
export const IconGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  * {
    margin-right: 8px;
  }
  > * {
    &:last-of-type {
      margin-right: 0;
    }
  }
`;
export const Likes = styled.section`
  font-weight: bold;
`;
export const Comments = styled.p``;
export const PostedAt = styled.p``;
export const NewComment = styled.section``;
export const Input = styled.input``;
export const Button = styled.button``;
