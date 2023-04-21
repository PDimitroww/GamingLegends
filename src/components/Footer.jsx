import logo from "../../public/LOGO.svg";
import { GrFacebook } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitch } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className="container footer">
      <div>
        <img src={logo} />
      </div>
      <div>
        <ul>
          <li>
            <a className="links" href="#">
              Privacy Policy
            </a>
          </li>
          <li>
            <a className="links" href="#">
              Contact us
            </a>
          </li>
          <li>
            <a className="links" href="#">
              Terms of Use
            </a>
          </li>
          <li>
            <a className="links" href="#">
              FAQ
            </a>
          </li>
        </ul>
      </div>
      <div className="socials-box">
        <h6>Social Links</h6>
        <ul className="socials">
          <li>
            <a className="fb icons" href="#">
              <GrFacebook />
            </a>
          </li>
          <li>
            <a className="is icons" href="#">
              <BsInstagram />
            </a>
          </li>
          <li>
            <a className="yt icons" href="#">
              <BsYoutube />
            </a>
          </li>
          <li>
            <a className="tw icons" href="#">
              <BsTwitch />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
