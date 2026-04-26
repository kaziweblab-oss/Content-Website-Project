import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

//import react icons
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

//import payment gateway icons
import viva from "../..//../assets/footer/paymentgateway icons/Grupo 163651 1.svg";
import strip from "../../../assets/footer/paymentgateway icons/Grupo 163576.svg";
import applePay from "../../../assets/footer/paymentgateway icons/Grupo 163578.svg";
import amex from "../../../assets/footer/paymentgateway icons/Grupo 163577.svg";
import masterCard from "../../../assets/footer/paymentgateway icons/Grupo 163580.svg";
import paypale from "../../../assets/footer/paymentgateway icons/Grupo 163581.svg";
import dpay from "../../../assets/footer/paymentgateway icons/Grupo 163582.svg";
import visa from "../../../assets/footer/paymentgateway icons/Grupo 163583.svg";
import gPay from "../../../assets/footer/paymentgateway icons/Grupo 163579.svg";
import skrill from "../../../assets/footer/paymentgateway icons/Grupo 163585.svg";
import amazone from "../../../assets/footer/paymentgateway icons/Grupo 163584.svg";

//import logo here
import logo from "../../../assets/home/logo/icon.svg";
import star from "../../../assets/footer/Star.svg";
import starShape from "../../../assets/footer/Shape_00000131362776327819300620000011855054010791946398_.svg";
import shieldIcon from "../../../assets/footer/sheild.svg";

//import style here
import style from "./footer.module.css";
import { IoIosStarOutline } from "react-icons/io";

function Footer() {
  return (
    <>
      <footer className={style.footer}>
        <div className={style.footerInner}>
          <div className={style.overflow}></div>
          <div className={style.footerMain}>
            <div className={style.trustSection}>
              <div className={style.trustPilotSection}>
                <p>Trustful</p>
                <div className={style.trustPilot}>
                  <img src={star} className={style.trustPilotIcon} />
                  <p>Trustpilot</p>
                </div>
                <div className={style.starShapSection}>
                  <img
                    src={starShape}
                    className={style.starShape}
                    alt="rating"
                  />
                  <img
                    src={starShape}
                    className={style.starShape}
                    alt="rating"
                  />
                  <img
                    src={starShape}
                    className={style.starShape}
                    alt="rating"
                  />
                  <img
                    src={starShape}
                    className={style.starShape}
                    alt="rating"
                  />
                  <img
                    src={starShape}
                    className={style.starShape}
                    alt="rating"
                  />
                </div>
                <p>TrustScore 5.0 | 457 Reviews</p>
              </div>
              <div className={style.securitySection}>
                <div>
                  <div className={style.securityIcon}>
                    <img src={shieldIcon} alt="sheildIcon" />
                    <p>Safe &amp; Secure</p>
                  </div>
                  <p className={style.supportText}>100% Secure, 24/7 Support</p>
                </div>
                <div className={style.fees}>
                  <p>NO PAYMENT FEES,</p>
                  <p>NO HIDDEN FEES</p>
                </div>
              </div>
            </div>
            <div className={style.footerContaineer}>
              <div className={style.footerSection}>
                <h2 className={style.sectionTitle}>Company</h2>
                <ul>
                  <li>
                    <NavLink to={"/"}>Home</NavLink>
                  </li>
                  <li>
                    <a>Our Story</a>
                  </li>
                  <li>
                    <NavLink to={"/blog"}>Blog</NavLink>
                  </li>
                  <li>
                    <a>Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className={style.footerSection}>
                <h2 className={style.sectionTitle}>Orders</h2>
                <ul>
                  <li>
                    <NavLink to={"/cart"}>My Orders</NavLink>
                  </li>
                  <li>
                    <a>Refund Policy</a>
                  </li>
                  <li>
                    <a>Cancelations</a>
                  </li>
                  <li>
                    <a>Help Center</a>
                  </li>
                </ul>
              </div>
              <div className={style.footerSectionResources}>
                <h2 className={style.sectionTitle}>Resources</h2>
                <ul>
                  <li>
                    <a className={style.link}>Why do Customers Love Us</a>
                  </li>
                  <li>
                    <a>Redeem Argentina and Turkey</a>
                  </li>
                  <li>
                    <a>How to Sell?</a>
                  </li>
                  <li>
                    <a>How Become Affiliate?</a>
                  </li>
                </ul>
              </div>
              <div className={style.footerSectionSocials}>
                <h2 className={style.sectionTitle}>Follow Us</h2>
                <div className={style.socials}>
                  <a>
                    <FaXTwitter className={style.social} />
                  </a>
                  <a>
                    <FaInstagram className={style.social} />
                  </a>
                  <a>
                    <FaFacebookF className={style.social} />
                  </a>
                  <a>
                    <FaLinkedinIn className={style.social} />
                  </a>
                </div>
              </div>
            </div>
            <div className={style.paymentGateways}>
              <a>
                <img src={viva} alt="viva.com_logo" />
              </a>
              <a>
                <img src={strip} alt="viva.com_logo" />
              </a>
              <a>
                <img src={applePay} alt="viva.com_logo" />
              </a>
              <a>
                <img src={amex} alt="viva.com_logo" />
              </a>
              <a>
                <img src={masterCard} alt="viva.com_logo" />
              </a>
              <a>
                <img src={paypale} alt="viva.com_logo" />
              </a>
              <a>
                <img src={dpay} alt="viva.com_logo" />
              </a>
              <a>
                <img src={visa} alt="viva.com_logo" />
              </a>
              <a>
                <img src={gPay} alt="viva.com_logo" />
              </a>
              <a>
                <img src={skrill} alt="viva.com_logo" />
              </a>
              <a>
                <img src={amazone} alt="viva.com_logo" />
              </a>
            </div>
            <div className={style.footerCopyright}>
              <div>
                <p>Vbrae &copy; Copyright 2023</p>
                <img src={logo} alt="" />
              </div>
              <p>
                <a>Privacy Policy</a> | <a>Terms of Service</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
