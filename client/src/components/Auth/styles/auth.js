import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  margin: ${({ page }) => (page === "sign-in" ? "70px 25px;" : "5px 40px")};
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
  margin: 14px 40px 22px;
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

export const Text = styled.p``;

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
