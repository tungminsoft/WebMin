import { Layout } from "antd";
const { Footer: FooterAntd } = Layout;

const Footer = () => {
  return (
    <FooterAntd style={{ textAlign: "center" }}>
      <a href="https://minsoftware.vn" target="_blank">
        MIN SOFTWARE
      </a>{" "}
      ©{new Date().getFullYear()}
    </FooterAntd>
  );
};

export default Footer;
