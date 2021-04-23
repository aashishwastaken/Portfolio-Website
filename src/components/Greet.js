import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import "./../App.scss";
import "./greet.css";
import homePic from '../assets/homePic.jpg';
export default function Greet() {
    return (<>
        <section id="home" style={{ display: 'flex', justifyContent: 'center' }}>
            
            <img src={homePic} alt="home-pic" id="greet-background" />


            {/* <div id="greet">
                <h1 >I am Aashish Prasad</h1>
                <h2>And <br/>I am a Full Stack Web Developer</h2>
            </div> */}
            <div id="greet" style={{ top: '20vh' }}  className="sign row">
                <div className="row"><span className="fast-flicker">I &nbsp; </span>
                 AM </div>
                <div className="row"> <span className="flicker">AASHISH&nbsp;</span> PRASAD</div>
    </div>

            <div id="greet" style={{ top: '75vh' }} className="sign row">
                <div className="row">
                <span className="fast-flicker">And I&nbsp;</span>
                 AM&nbsp; </div>
               <div >  <span className="flicker">a Web&nbsp;</span> 
                 Developer </div>
    </div>
            <div id="resume-btn" >
            <a className="col" target="_blank"
            rel="noreferrer" href="https://drive.google.com/file/d/18bXt8ZDXITGW0I494jrA3S2vJeFa-24f/view?usp=sharing">
                 <FontAwesomeIcon icon={faDownload} inverse size="2x" />
                 <span className="flicker">Download my<br/> resume!</span>
            </a>
            
            </div>
        </section>
    </>

    )
}
