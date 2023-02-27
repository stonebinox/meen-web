import { useEffect } from "react";
import styled from "styled-components";

import Logo from "./assets/logo-min.png";

const LogoHolder = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  margin-top: 128px;
  text-align: center;
`;

const ComingSoonText = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 32px;
  color: #666;
  text-transform: uppercase;
  letter-spacing: -2px;
  margin-top: 64px;
  transition: all 0.2s ease;
  transform: rotateX(30deg);
`;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  padding: 4px;
  text-align: center;
  background-color: #333;
  color: #efefef;
  font-size: 11px;
`;

const Link = styled.a`
  text-decoration: none;
  color: #ffa500;
`;

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("soon-text").style.transform = "rotateX(0deg)";
      document.getElementById("soon-text").style.color = "#999";
    }, 1000);
  }, []);

  return (
    <>
      <LogoHolder>
        <img src={Logo} alt="Meen Motors" width="40%" />
      </LogoHolder>
      <br />
      <ComingSoonText id="soon-text">Coming soon</ComingSoonText>
      <Footer>
        Copyright &copy; {new Date().getFullYear()} &bull;{" "}
        <Link href="https://www.auroradesignshq.com">Aurora Designs LLP</Link>{" "}
        &bull; <Link href="https://www.auroradesignshq.com">Contact Us</Link>
      </Footer>
    </>
  );
};

export default App;
