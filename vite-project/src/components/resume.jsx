import React from 'react';
import '../index.css';

const Resume = () => {
    return (
        <div className="resume">
            <h1>Resume</h1>
        <p>Download my resume:</p>
            <div className="resume-download">
                <a href="/Resume.pdf" download >
                    <button>Download My Resume</button>
                </a>
            </div>
    
        <h2>Proficiencies</h2>
            <ul>
            <li>JavaScript (ES6+)</li>
            <li>React, Redux</li>
            <li>Node.js, Express</li>
            <li>SQL, PostgreSQL</li>
            <li>HTML5, CSS3,</li>
            <li>Git, GitHub</li>
            <li>Agile Development</li>
            </ul>
        </div>
    )};

export default Resume;