import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMobileAlt, faTools, faCoffee, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

import '../App.scss';
import './contact.css';
library.add(fab);
export default function Contact() {
  return (

    <section id="contact" className="col">
      <div className="fill"></div>
      <p className="heading">Let's grind together!!</p>
      <p>Can I buy you a cup of coffee?<FontAwesomeIcon icon={faCoffee} /></p>


      <div id="contact-methods" className="row">
        
        <a className="col" href="https://www.linkedin.com/in/aashishwastaken/" rel="noreferrer" target="_blank">
          <p><FontAwesomeIcon icon={['fab', 'linkedin']} /></p>
            LinkedIn</a>

        <a className="col" href="https://github.com/aashishwastaken" rel="noreferrer" target="_blank">
          <p><FontAwesomeIcon icon={['fab', 'github-square']} /></p>
           Github</a>

        <a className="col" href="mailto:aashishprasd45@gmail.com" rel="noreferrer">
          <p><FontAwesomeIcon icon={faEnvelope} /></p>
           Mail Me</a>

        <a className="col" href="tel:+917587398424" rel="noreferrer">
          <p> <FontAwesomeIcon icon={faMobileAlt} /></p>
            Call Me</a>

      </div>


      <footer>
        <p>
          Built By <FontAwesomeIcon icon={faTools} />
          <a href="https://www.linkedin.com/in/aashishwastaken/" target="_blank" rel="noreferrer" >AashishWasTaken</a>
          </p>

          <p>
          Get the <FontAwesomeIcon icon={faCodeBranch} />
         <a href="https://github.com/aashishwastaken/Portfolio-Website/" target="_blank" rel="noreferrer" >Source Code</a>
          </p>

          <p> Deployed on <FontAwesomeIcon icon={['fab', 'aws']} />
           <a href="https://aws.amazon.com/amplify/" target="_blank" rel="noreferrer" >AWS Amplify</a>
        </p>
      </footer>

    </section>

  )
}
