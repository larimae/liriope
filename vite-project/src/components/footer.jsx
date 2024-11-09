import React from 'react';
import './index.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <a
                    href="https://github.com/larimae"
                    className="footer-link"
                >
                <i className="fab fa-github"></i> GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/larissa-hernandez-a530342ba/"
                    className="footer-link"
                >
                <i className="fab fa-linkedin"></i> LinkedIn
                </a>
                <a
                    href="https://twitter.com/your-twitter-profile"
                    className="footer-link"
                >
                <i className="fab fa-stackoverflow"></i> StackOverflow
                </a>
            </div>
        </footer>
    );
};

export default Footer;
