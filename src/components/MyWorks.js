import React from 'react';

import Card from './Card';
import data from '../assets/data.js';
import './contact.css';
export default function MyWorks() {

    let workData = Object.keys(data);

    let projects = workData.map((category, q) => {
        return (<div key={category + '-' + q}>
            <div className="category"><u>{category}</u></div>
            <div className="projects-wrapper">


                {data[category].map((x, i) => {
                    return (<Card key={(Math.random() + '_' + i).toString()} work={x} />);
                })}

            </div>
        </div>
        );
    });

    return (
        <section id="my-works">
            <div className="fill"></div>
            <p className="heading">My Works</p>
            {projects}
        </section>
    )
}
