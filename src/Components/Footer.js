import logoImg from "../img/logo-dark.svg";
import arrowBullet from "../img/arrow-bullet.svg";
import socialFacebook from "../img/social-facebook.svg";
import socialInstagram from "../img/social-instagram.svg";
import socialTiktok from "../img/social-tiktok.svg";
import socialTwitter from "../img/social-twitter.svg";

const Footer = () => {
  return (
    <section id="footer" className="py-20 bg-[#6CA95E] text-green-900">
      <div className="max-w-[1000px] mx-auto">
        <div className="py-10 w-96">
          <div className="logo flex font-black">
            <img src={logoImg} alt="indragon logo"></img>
            <span className="text-4xl pl-2">RENTACAR</span>
          </div>
        </div>
        <div className="footer__links__column flex gap-16">
          <ul className="footer__links__column">
            <li className="flex">
              <img className="w-6" src={arrowBullet} alt="" />
              <a href="http://" className="text-lg">
                News
              </a>
            </li>
            <li className="flex">
              <img className="w-6" src={arrowBullet} alt="" />
              <a href="http://" className="text-lg">
                Rentals
              </a>
            </li>
            <li className="flex">
              <img className="w-6" src={arrowBullet} alt="" />
              <a href="http://" className="text-lg">
                Locations
              </a>
            </li>
            <li className="flex">
              <img className="w-6" src={arrowBullet} alt="" />
              <a href="http://" className="text-lg">
                Offer
              </a>
            </li>
            <li className="flex">
              <img className="w-6" src={arrowBullet} alt="" />
              <a href="http://" className="text-lg">
                Delivery
              </a>
            </li>
          </ul>
          <ul className="footer__links__column">
            <li className="flex">
              <img className="w-6" src={arrowBullet} alt="" />
              <a href="http://" className="text-lg">
                Terms&Conditions
              </a>
            </li>
            <li className="flex">
              <img className="w-6" src={arrowBullet} alt="" />
              <a href="http://" className="text-lg">
                Insurance policy
              </a>
            </li>
            <li className="flex">
              <img className="w-6" src={arrowBullet} alt="" />
              <a href="http://" className="text-lg">
                Rent with a driver
              </a>
            </li>
          </ul>
          <ul className="footer__links__column">
            <li className="flex">
              <img className="w-6" src={arrowBullet} alt="" />
              <a href="http://" className="text-lg">
                Safe Driving Academy
              </a>
            </li>
            <li className="flex">
              <img className="w-6" src={arrowBullet} alt="" />
              <a href="http://" className="text-lg">
                Charity
              </a>
            </li>
            <li className="flex">
              <img className="w-6" src={arrowBullet} alt="" />
              <a href="http://" className="text-lg">
                Careers
              </a>
            </li>
            <li className="flex">
              <img className="w-6" src={arrowBullet} alt="" />
              <a href="http://" className="text-lg">
                Call Us
              </a>
            </li>
            <li className="flex">
              <img className="w-6" src={arrowBullet} alt="" />
              <a href="http://" className="text-lg">
                Contact Form
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__social">
          <div className="text-2xl font-bold mt-12">Follow us:</div>
          <ul className="footer__social__icons flex place-items-center gap-3 mt-4">
            <li>
              <img src={socialFacebook}></img>
            </li>
            <li>
              <img src={socialTwitter}></img>
            </li>
            <li>
              <img src={socialInstagram}></img>
            </li>
            <li>
              <img src={socialTiktok}></img>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
