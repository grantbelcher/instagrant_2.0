import styled from "styled-components";

export const Container = styled.div``;

export const Logo = styled.img`
  margin: 75px 25px;
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
  margin: 0 40px 20px;
  color: #8e8e8e;
  font-size: 12px;
  height: 36px;
  overflow: hidden;
`;

//disables
// background-color: rgba(0,149,246,.3);
// pointer-events: none;
export const Button = styled.button`
  margin: 8px 40px;
  background-color: #0095f6;
  border: 1px solid transparent;
  font-size: 14px;
  font-weight: 600;
  padding: 5px 9px;
  text-align: center;
`;

export const Text = styled.p``;

// width: 100%

export const TextSmall = styled.p`
  margin: 16px 25% 0;
  color: #8e8e8e;
`;
export const Link = styled.a`
  text-decoration: none;
`;

export const Footer = styled.div``;
export const FooterSmall = styled.p``;
export const FooterMain = styled.p``;
