import React from 'react';
import './WelcomeSection.scss';
import photo from '../../assets/img/mainPhoto.png';

const WelcomeSection = () => {

  const data = new Date();
  const getCurrHours = (func) => {
    let value = func;
    if (value.toString().length < 2) {
      return `0${value}`
    }

    return value
  };

  const dataString = `${getCurrHours(data.getHours())}:${getCurrHours(data.getMinutes())}:${getCurrHours(data.getSeconds())} ${data.getDay()}.${getCurrHours(data.getMonth())}.${data.getFullYear()}`


  return (
    <section className="welcomeSection">
      <div className="mainBlock">
        <div className="welcomeSection__info">
          <img
            className="welcomeSection__photo"
            src={photo}
            alt="avatar"
          />
          <div className="welcomeSection__message message">
            <div className="message__body">hello) My name is Viktor and I'm frontend developer</div>
            <div className="message__date">{dataString}</div>
          </div>
        </div>
        <div className="welcomeSection__link">
          <a href='#start'>Start &darr;</a>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;