import React from 'react';
import '../index.css'; 

const About = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <img 
                    src="/about-me-avatar.webp" 
                    alt="Larissa" 
                    className="about-image" 
                />
                <div className="about-text">
                    <h1>About</h1>
                    <p>
                        Hi, I'm Larissa! I'm passionate about web development and always eager to learn new skills.
                        In my free time, I enjoy reading, writing, and spending time with my cat, Axl.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
