import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon from '../assets/img/nav-ico2.svg';
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/company/enprogix/"><img src={navIcon1} alt="linkedin" /></a>
                <a href="https://twitter.com/enprogi45016"><img src={navIcon} alt="twitter" /></a>
                <a href="https://www.facebook.com/profile.php?id=100092610457892"><img src={navIcon2} alt="facebook" /></a>
                <a href="https://www.instagram.com/reels/Co2lTkuBVu8/"><img src={navIcon3} alt="instagram" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
