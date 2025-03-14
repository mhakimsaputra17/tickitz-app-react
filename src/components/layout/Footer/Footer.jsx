import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <section className="footer-section">
            <div className="logo">
              <img
                src="./assets/images/logo/tickets.svg"
                alt="tickitz footer"
              />
            </div>
            <p className="tagline">
              Stop waiting in line. Buy tickets conveniently, watch movies
              quietly.
            </p>
          </section>
          <section className="footer-section">
            <h3>Explore</h3>
            <nav className="nav-links">
              <a href="#">Cinemas</a>
              <a href="#">Movies List</a>
              <a href="#">My Ticket</a>
              <a href="#">Notification</a>
            </nav>
          </section>
          <section className="footer-section">
            <h3>Our Sponsor</h3>
            <div className="sponsors">
              <div className="sponsor-logo">
                <img src="./assets/images/icons/edu.svg" alt="ebu-id" />
              </div>
              <div className="sponsor-logo">
                <img src="./assets/images/icons/cineone.svg" alt="cineone" />
              </div>
              <div className="sponsor-logo">
                <img src="./assets/images/icons/hiflix.svg" alt="hiflix" />
              </div>
            </div>
          </section>
          <section className="footer-section">
            <h3>Follow us</h3>
            <div className="social-links">
              <a href="#" className="social-link">
                <img src="./assets/images/icons/facebook.svg" alt="facebook" />
                Tickitz Cinema id
              </a>
              <a href="#" className="social-link">
                <img
                  src="./assets/images/icons/instagram.svg"
                  alt="instagram"
                />
                tickitz.id
              </a>
              <a href="#" className="social-link">
                <img src="./assets/images/icons/twitter.svg" alt="twitter" />
                tickitz.id
              </a>
              <a href="#" className="social-link">
                <img src="./assets/images/icons/youtube.svg" alt="youtube" />
                Tickitz Cinema id
              </a>
            </div>
          </section>
        </div>
        <div className="copyright">© 2020 Tickitz. All Rights Reserved.</div>
      </footer>
    </>
  );
}

export default Footer;
