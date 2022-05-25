import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ windowDimensions }) =>
    windowDimensions === "mobile"
      ? "white"
      : "rgba(var(--b3f, 250, 250, 250), 1)"};
`;

export const Image = styled.img`
  display: ${({ windowDimensions }) =>
    windowDimensions === "mobile" ? "none" : "block"};
  height: 580px;
  width: 45%;
  max-width: 420px;
  margin-bottom: 12px;
  margin-right: 32px;
  margin-bottom: 12px;
  margin-right: 32px;
  margin-top: auto 0;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: ${({ windowDimensions }) =>
    windowDimensions === "mobile"
      ? "none"
      : "1px solid rgba(var(--b6a, 219, 219, 219), 1)"};
  border-radius: 1px;
  max-width: 350px;
  height: 580px;
  margin-top: auto 0;
`;

export const Logo = styled.img`
  margin: ${({ page }) =>
    page === "sign-in" ? "70px 25px 40px;" : "50px 40px 12px"};
`;
export const Form = styled.form`
  margin-bottom: 10px;
  max-width: 350px;
  width: 100%;
`;

export const Contents = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 0 0 auto;
`;

export const Banner = styled.div`
  margin: 14px 40px 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Decoration = styled.div`
  background-color: #dbdbdb;
  height: 1px;
  flex-grow: 1;
  flex-shrink: 1;
`;

export const BannerText = styled.div`
  color: #8e8e8e;
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 13px;
  font-weight: 600;
  line-height: 15px;
  margin: 0 18px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  margin: ${({ page }) => (page === "sign-in" ? "15px 40px" : "5px 40px")};
  color: #8e8e8e;
  padding: 10px;
  font-size: 12px;
  height: 36px;
  overflow: hidden;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
`;

//disables
// background-color: rgba(0,149,246,.3);
// pointer-events: none;
export const Button = styled.button`
  margin: 8px 40px;
  background-color: #0095f6;
  color: white;
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  padding: 5px 9px;
  text-align: center;
`;

export const Text = styled.p`
  margin: 0 40px 10px;
  font-size: 17px;
  line-height: 20px;
  font-weight: 600;
  color: #8e8e8e;
  text-align: center;
`;

// width: 100%

export const TextSmall = styled.p`
  margin: 10px 40px 20px;
  text-align: center;
  color: #8e8e8e;
  font-size: 14px;
  line-height: 18px;
`;
export const Link = styled.a`
  text-decoration: none;
  color: #0095f6;
  font-weight: 600;
`;

export const Footer = styled.div``;
export const FooterSmall = styled.p``;
export const FooterMain = styled.p``;
