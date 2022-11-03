import { Link } from "react-router-dom";

import Container from "./Container";
import Logo from "../UI/Logo";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-footer pt-[60px]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-4 mb-6 mr-4">
            <Logo white />
            <p className="mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              assumenda aspernatur repellendus veritatis, dolorem vel
              repudiandae sed officiis blanditiis molestias.
            </p>
          </div>
          <div className="lg:col-span-3 mb-6">
            <h4 className="footer__links-title">Top Categories</h4>
            <ul>
              <li>
                <Link to="#" className="footer__links-item">
                  Mobile Phones
                </Link>
              </li>
              <li>
                <Link to="#" className="footer__links-item">
                  Modern Sofa
                </Link>
              </li>
              <li>
                <Link to="#" className="footer__links-item">
                  Arm Chair
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2 mb-6">
            <h4 className="footer__links-title">Useful Links</h4>
            <ul>
              <li>
                <Link to="/shop" className="footer__links-item">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/cart" className="footer__links-item">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/login" className="footer__links-item">
                  Login
                </Link>
              </li>
              <li>
                <Link to="#" className="footer__links-item">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3 mb-6">
            <h4 className="footer__links-title">Contact</h4>
            <ul>
              <li className="contact__list-item">
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>123 ZindaBazar, Sylhet, Bangladesh</p>
              </li>
              <li className="contact__list-item">
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+1234567890</p>
              </li>
              <li className="contact__list-item">
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>example123@163.com</p>
              </li>
            </ul>
          </div>
        </div>
        <div></div>
      </Container>
      <p className="text-center py-4 text-sm mt-[30px]">
        Copyright {year} developed by{" "}
        <a
          href="https://github.com/blahking"
          target="_blank"
          className="hover:text-[gold] hover:underline"
        >
          blahking
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
