import React from 'react'

export default function Card({ work}) {
    let imgPath='https://raw.githubusercontent.com/aashishwastaken/Portfolio-website/277c117243dcb94f10d5a692725b9c9697f84cd6/public/';
    return (
        <div className="card" >
            
            <div className="inner-card">
                <img className="work-image" alt={`screenshot-${work.image}`} src={`${imgPath}images/${work.image}.png`} />
                <div className="work-title">{work.title}</div>
                <div className="work-description">{work.description}</div>
                
            </div>
            <div className="work-tools">{work.tools}</div>
            <div className="work-btn">
                <a href={work.webLink} target="_blank" rel="noreferrer"> <button  className="btn card-btn web-btn">Web</button></a>
                <a href={work.code} target="_blank" rel="noreferrer"> <button  className="btn card-btn code-btn">Code</button> </a>
            </div>
           
        </div>
    )
}
