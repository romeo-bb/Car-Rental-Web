import { IconMail, IconMailOpened, IconPhone } from "@tabler/icons-react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import { IconLocation } from "@tabler/icons-react";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

function Contact() {
  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ep962r6', 'template_icna3ff', form.current, 'UtNeLGIo22vCCspSj')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
                A multifaceted professional skilled in multiple fields of
                research, development as well as a learning specialist. Over 15
                years of experience.
              </p>
              <a href="/" className="flex">
                <IconPhone /> &nbsp; +212 777 067 146
              </a>
              <a href="/" className="flex">
                <IconMail /> &nbsp; mandalosy13@gmail.com
              </a>
              <a href="/">
                <IconLocation />
                &nbsp; Fes, Morocco
              </a>
            </div>
            <div className="contact-div__form">
              <form ref={form} onSubmit={sendEmail}>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" name="from_name" placeholder='full name'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" name="user_email" placeholder="youremail@example.com"></input>

                <label>
                  Phone <b>*</b>
                </label>
                <input type="phone" name="number_phone" placeholder="your number"></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea name="message" placeholder="Write Here.."></textarea>

                <button type="submit">
                  <IconMailOpened />
                  &nbsp; Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <IconPhone width={40} height={40} />
                <h3>+212 777 067 146</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
