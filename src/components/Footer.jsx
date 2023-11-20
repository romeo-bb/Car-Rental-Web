import { IconMail, IconPhoneCall } from "@tabler/icons-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>CAR</span> Rental
              </li>
              <li>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs.
              </li>
              <li>
                <a href="tel:123456789" className="flex">
                  <IconPhoneCall /> &nbsp; +212 777 067 146
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                carrental@gmail.com"
                className="flex"
                >
                  <IconMail />
                  &nbsp; mandalosy13@gmail.com
                </a>
              </li>

              <li>
                <a
                  style={{ fontSize: "14px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/mandalosy"
                >
                  © Copyright 2023 MOHAMMED ANDALOSY
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Company</li>
              <li>
                <a href="#home">New York</a>
              </li>
              <li>
                <a href="#home">Careers</a>
              </li>
              <li>
                <a href="#home">Mobile</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
              <li>
                <a href="#home">How we work</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Mon - Fri: 9:00AM - 9:00PM</li>
              <li>Sat: 9:00AM - 19:00PM</li>
              <li>Sun: Closed</li>
            </ul>

            <ul className="footer-content__2">
              <li>Subscription</li>
              <div className='display-flex'>
                <a href="https://twitter.com/mandalosy"><FaInstagram size={30} /></a>
                <a href="https://twitter.com/mandalosy"><FaFacebook size={30} /></a>
                <a href="https://twitter.com/mandalosy"><FaYoutube size={30}  /></a>
                <a href='https://twitter.com/mandalosy'><RiTwitterXFill size={30} /></a>
              </div>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
