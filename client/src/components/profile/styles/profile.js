import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 720px) {
    padding: 30px 20px 0;
    box-sizing: content-box;
    width: calc(100% - 40px);
    max-width: 935px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;

  margin-bottom: 24px;
  padding-bottom: 0;

  @media (min-width: 720px) {
    margin-bottom: 44px;
  }
  @media (max-width: 720px) {
    margin: 16px 16px 24px 16px;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 28px;
  @media (min-width: 720px) {
    width: 31%;
  }

  @media (max-width: 720px) {
    justify-content: center;
  }
`;

export const Canvas = styled.div`
  @media (min-width: 720px) {
    width: 130px;
    height: 130px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 735px) {
    width: 70px;
    height: 70px;
  }
`;

export const Avatar = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 100%;
  background: red;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  flex-basis: 0;
  flex-grow: 1;
`;

export const Row = styled.div`
  display: flex;
  margin-bottom: 25px;

  a {
    font-size: 18px;
  }
`;

// @media (min-width: 736px)
// .XBGH5 {
//     margin-bottom: 20px;
// }
// align-items: center;
// display: flex;
// flex-direction: row;
// flex-shrink: 1;

// export const Info = styled.div``;

// font-weight: 300;
// font-size: 28px;
//     line-height: 32px;

export const Handle = styled.h2`
  font-size: 28px;
  line-height: 32px;
  font-weight: 300;
  margin: 0;

  @media (max-width: 720px) {
    margin-top: 0;
    margin-bottom: 12px;
  }
`;

// desktop
//   margin-left: 20px;
// background-color: transparent;
// border: 1px solid #dbdbdb;
// color: #262626;
// border-radius: 4px;
// text-decoration: none;

// mobile
// max-width: 250px

// font-weight: 600;
// color: #262626;

export const Link = styled.a``;

// flex: 1 1 auto;
export const FollowBtn = styled.button`
  max-width: 220px;
  background-color: #0095f6;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  padding: 5px 9px;
  text-align: center;
  cursor: pointer;
`;

export const EditBtn = styled.button`
  margin-left: 20px;
  background-color: transparent;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  color: #262626;
  font-size: 14px;
  font-weight: 600;
  padding: 5px 9px;
  text-align: center;
  cursor: pointer;
`;

// UNSTYLE THIS anchor

export const Statistic = styled.a`
  font-size: 16px;
  margin-right: 40px;
  color: #262626;
`;
// color: #262626;
// font-weight: 600;
// font-size: 16px;
// bold number in statistic ALSO Name before bio

export const Emphasis = styled.span`
  font-weight: 600;
  color: #262626;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  * {
    font-size: 16px;
    line-height: 24px;
  }
  @media (max-width: 720px) {
    padding: 0 20px;
    * {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;

export const MobileStats = styled.ul`
  list-style: none;
  display: flex;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
  justify-content: space-around;
  padding: 12px 0;
`;

export const MobileStatistic = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  justify-content: center;
  text-align: center;
  width: 33.3%;
  color: #8e8e8e;
`;

export const Bio = styled.div``;
