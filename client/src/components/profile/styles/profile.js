import styled from "styled-components";

// mobile

export const Container = styled.div`
  @media (min-width: 736px) {
    padding: 30px 20px 0;
    box-sizing: content-box;
    width: calc(100% - 40px);
    max-width: 935px;
  }
`;

// flex-grow: 1;

// @media (max-width: 736px) {
//   max-width: 935px;
//   width: 100%;
// }

export const Header = styled.div`
  display: flex;
  flex-direction: row;

  margin-bottom: 24px;
  padding-bottom: 0;

  @media (min-width: 736px) {
    margin-bottom: 44px;
  }
  @media (max-width: 735px) {
    margin: 16px 16px 24px 16px;
  }
`;

// margin-left: 16px;
// margin-right: 16px;
// margin-top: 16px;
// justify-content: center;

//   margin-right: 28px;

// @media (min-width: 736px)
// .eC4Dz {
//     -webkit-flex-basis: 0;
//     -ms-flex-preferred-size: 0;
//     flex-basis: 0;
//     -webkit-box-flex: 1;
//     -webkit-flex-grow: 1;
//     -ms-flex-positive: 1;
//     flex-grow: 1;
//     margin-right: 30px;
// }

// @media (max-width: 735px)
// .eC4Dz {
//     -webkit-box-pack: center;
//     -webkit-justify-content: center;
//     -ms-flex-pack: center;
//     justify-content: center;
//     margin-right: 28px;
// }
// flex-shrink: 0;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: teal;
  margin-right: 28px;
  @media (min-width: 735px) {
    width: 31%;
  }

  @media (max-width: 735px) {
    justify-content: center;
  }
`;

// height: 176px;

// display: flex;
// flex-direction: column;

// position: absolute;
// top: -9px;
// left: -9px;

// element.style {

// }

export const Canvas = styled.div`
  @media (min-width: 735px) {
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
// align-items: center;
// align-self: center;
// display: block;
// flex: none;
// justify-content: center;
// position: relative;

// border-radius:

export const Avatar = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 100%;
  background: red;
`;

export const Info = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  background-color: paleturqouis;
  border-bottom: solid black 1px;
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

export const Handle = styled.h2``;

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

// background-color: #0095f6;
// border: 1px solid transparent;
// border-radius: 4px;
// color: #fff;
// font-size: 14px;
// font-weight: 600;
// padding: 5px 9px;
// text-align: center;
// cursor: pointer;

export const FollowBtn = styled.button``;

// font-size: 16px;
//     margin-right: 40px;
// UNSTYLE THIS anchor

export const Statistic = styled.a``;
// color: #262626;
// font-weight: 600;
// font-size: 16px;
// bold number in statistic ALSO Name before bio

export const Emphasis = styled.span``;

export const Bio = styled.div``;
