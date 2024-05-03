import React from 'react';

interface FooterProps {
  // Add any necessary props here
}

const Footer = () => {
  return (
    <footer className="footer">
      <div className="w-layout-blockcontainer container-small w-container">
        <div className="footer-content-wrapper">
          <div className="footer-content">
            <a href="index.html" aria-current="page" className="footer-logo-wrapper w-inline-block w--current">
              <img src="images/hangry-logo.png" loading="lazy" alt="" className="footer-logo" />
            </a>
            <div className="footer-socials-wrapper">
              <a href="https://www.linkedin.com" target="_blank" className="footer-social w-inline-block">
                <img src="images/LinkedIn.svg" loading="lazy" alt="LinkedIn" className="icon-size-20" />
              </a>
              <a href="https://www.facebook.com/" target="_blank" className="footer-social w-inline-block">
                <img src="images/Facebook.svg" loading="lazy" alt="Facebook" className="icon-size-20" />
              </a>
              <a href="https://twitter.com" target="_blank" className="footer-social w-inline-block">
                <img src="images/Twitter-X.svg" loading="lazy" alt="Twitter (X)" className="icon-size-20" />
              </a>
            </div>
          </div>
          <div className="footer-legal">
            <div className="paragraph">© Hangry 2024, All Rights Reserved</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
