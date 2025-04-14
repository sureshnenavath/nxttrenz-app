// Footer.js
import React from 'react'
import './index.css'
import {FaGithub, FaLinkedin, FaTwitter, FaUserCircle} from 'react-icons/fa' // Updated here

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2>Nenavath Suresh</h2>
          <p>B.Tech CSE @ Siddhartha Institute of Engineering and Technology | React Dev | ML & Data Science Enthusiast</p>
        </div>

        <div className="footer-right">
          <a
            href="https://www.linkedin.com/in/nenavath-suresh/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="footer-icon" title="LinkedIn" />
          </a>
          <a
            href="https://github.com/sureshnenavath"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="footer-icon" title="GitHub" />
          </a>
          <a
            href="https://nenavathsuresh.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <FaUserCircle className="footer-icon" title="Portfolio" />{' '}
            {/* Updated here */}
          </a>
          <a
            href="https://x.com/n_s_u_r_e_s_h"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="footer-icon" title="Twitter" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {currentYear} Suresh Nenavath. Made with ❤️ and React.
      </div>
    </footer>
  )
}

export default Footer