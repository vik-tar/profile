import React from 'react';
import './AboutSection.scss';
import Skills from "../skills/Skills";

const AboutSection = () => {
  const skills = [
    {skill: "HTML", level: 90},
    {skill: "CSS", level: 90},
    {skill: "JavaScript", level: 70},
    {skill: "React", level: 80},
    {skill: "Vue", level: 30},
    {skill: "NodeJS", level: 40},
  ]

  return (
    <section className='aboutSection'>
      <a id="start"></a>
      <div className="aboutSection__container">
        <h3 className="aboutSection__title">About me</h3>
        <div className="aboutSection__experience">
          <p>
            &#123;<br />
            &nbsp;&nbsp;<strong>fullName</strong>: Viktor Taraskevych,
          </p>
          <p>
            &nbsp;&nbsp;<strong>location</strong>: Ukraine Odessa,
          </p>
          <p>
            &nbsp;&nbsp;<strong>workExperience</strong>: &#123;
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;<strong>'Processica'</strong>: &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>duration</strong>: 11.2019 - 01.2021,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>stack</strong>: &#91;HTML, CSS, JS, React, Effector, NodeJS&#93;,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>workflow</strong>: Creation and editing of adaptive and responsive layout,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;creation and development of site logic,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;working with state management, spent some time editing the backend <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;,
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;<strong>'Ukeess'</strong>: &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>duration</strong>: 03.2021 - 12.2021,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>stack</strong>: &#91;JS, React/Redux, NodeJS, Enzyme&#93;,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>workflow</strong>: Working with responsive layout (pixelperfect),<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;creating a new home page for a major international portal,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;some time to work with the backend and creating unit tests<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;,<br />
            &nbsp;&nbsp;&#125;,
          </p>
          <p>
            &nbsp;&nbsp;<strong>education</strong>: &#123;
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;<strong>'Odessa National Polytechnic University'</strong>: &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>duration</strong>: 2007 - 2012<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>status</strong>: master,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>faculty</strong>: management of foreign economic activity<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;,
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;<strong>'Hillel IT School'</strong>: &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>duration</strong>: 01.2019 - 12.2021,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>status</strong>: barchelor,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>faculty</strong>: &#91;Frontend Basic (HTML, CSS), Frontend Pro (JS)&#93;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;,<br />
            &nbsp;&nbsp;&#125;,<br />
            &#125;<br />
          </p>
        </div>
        <div className="aboutSection__skills skills">
          <h3 className="skills__title">Skills</h3>
          <Skills skills={skills} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;