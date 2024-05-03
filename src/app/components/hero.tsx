
import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
    return (
        
        <div className="hero-content-wrapper section" data-color="#231f20">
       <img src="./images/line.svg" alt="Decorative line" className="absolute inset-0 w-full -z-10" />

        <img
          src="images/hangry-logo.png"
          loading="lazy"
          alt=""
          className="image-2 margin-bottom-24"
        />
        <div
          style={{
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            opacity: 1,
            transformStyle: "preserve-3d"
          }}
          className="hero-content"
        >
          <img
            src="images/Asset-28.svg"
            loading="lazy"
            alt=""
            className="editors margin-bottom-16 "
          />
          <div className="home-hero-main-content vertical-flex-center">
            <div className="home-hero-main-content vertical-flex-center margin-bottom-40">
              <h1 className="h1 center-text cream">
                An ordering app to empower restaurants
              </h1>
              <h2 className="cream h3 center-text margin-bottom-12">
                Designed by a restauranteur
              </h2>
              <p className="typewriter center-text cream">
                ✔ Cancel 3rd Party Fees
                <br />✔ Automated Marketing
                <br />✔ Direct-to-Customer <br />
              </p>
            </div>
            <div className="hero-buttons-wrapper">
              <a
                href="https://calendly.com/"
                target="_blank"
                className="button primary w-button"
              >
                Start today - It's Free!
              </a>
            </div>
          </div>
          <img
            src="images/Hangry-Peace-sign.png "
            loading="lazy"
            style={{
              opacity: 1,
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d"
            }}
            height="Auto"
            alt=""
            className="hero-illustration-1"
          />
          <img
            src="images/Asset-25.png"
            loading="lazy"
            style={{
              opacity: 1,
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d"
            }}
            alt=""
            className="hero-illustration-2"
          />
          <img
            src="images/Asset-27.png"
            loading="lazy"
            style={{
              opacity: 1,
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d"
            }}
            data-w-id="d6a012c1-939d-a82a-6992-724a459b8843"
            alt=""
            className="hero-illustration-3"
          />
          <img
            src="images/red-arrow.png"
            loading="lazy"
            style={{
              opacity: 1,
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d"
            }}
            alt=""
            className="hero-illustration-4"
          />
        </div>
      </div>
      
    );
  }
  