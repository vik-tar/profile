import React from 'react';
import './Contact.scss';
import telegram from '../../assets/img/telegram.png';
import linkedin from '../../assets/img/linkedin-logo.png';
import gmail from '../../assets/img/gmail-logo.png';
import github from '../../assets/img/github.png';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__container">
        <h3 className="contact__title">Contact me</h3>
        <div className="links">
          <a href="https://telegram.im/@tar_vik" target="_blank">
            <img src={telegram} alt="telegram"/>
          </a>
          <a href="mailto:zlatanero91@gmail.com" target="_blank">
            <img src={gmail} alt="gmail"/>
          </a>
          <a href="https://www.linkedin.com/in/viktor-t-07246b18b/" target="_blank">
            <img src={linkedin} alt="linkedin"/>
          </a>
          <a href="https://github.com/vik-tar" target="_blank">
            <img src={github} alt="github"/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;