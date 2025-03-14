import React from "react";

function Footer() {
  return (
    <>
      <footer className="mt-[100px] bg-[#fff] px-[0] py-[20px]">
        <div className="footer-container flex justify-between max-w-[1200px] mx-[auto] my-[0] px-[5%] py-[40px] flex-wrap">
          <section className="footer-section mb-[30px] min-w-[200px] flex-[1_1_200px]">
            <div className="logo ">
              <img
                src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/logo/tickets.svg"
                alt="tickitz footer"
                className="max-w-[130px] h-auto mb-[15px]"
              />
            </div>
            <p className="tagline text-[#6e7191] leading-[1.6] max-w-[250px]">
              Stop waiting in line. Buy tickets conveniently, watch movies
              quietly.
            </p>
          </section>
          <section className="footer-section mb-[30px] min-w-[200px] flex-[1_1_200px]">
            <h3 className="text-[1.2rem] mb-[20px]">Explore</h3>
            <nav className="nav-links flex flex-col gap-[15px]">
              <a
                href="#"
                className="no-underline text-[#6e7191] [transition:color_0.3s] hover:text-[#1d4ed8]"
              >
                Cinemas
              </a>
              <a
                href="#"
                className="no-underline text-[#6e7191] [transition:color_0.3s] hover:text-[#1d4ed8]"
              >
                Movies List
              </a>
              <a
                href="#"
                className="no-underline text-[#6e7191] [transition:color_0.3s] hover:text-[#1d4ed8]"
              >
                My Ticket
              </a>
              <a
                href="#"
                className="no-underline text-[#6e7191] [transition:color_0.3s] hover:text-[#1d4ed8]"
              >
                Notification
              </a>
            </nav>
          </section>
          <section className="footer-section mb-[30px] min-w-[200px] flex-[1_1_200px]">
            <h3 className="text-[1.2rem] mb-[20px]">Our Sponsor</h3>
            <div className="sponsors flex flex-col gap-[15px]">
              <div className="sponsor-logo h-[30px] mb-[10px]">
                <img
                  src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/edu.svg"
                  alt="ebu-id"
                />
              </div>
              <div className="sponsor-logo h-[30px] mb-[10px]">
                <img
                  src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/cineone.svg"
                  alt="cineone"
                />
              </div>
              <div className="sponsor-logo h-[30px] mb-[10px]">
                <img
                  src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/hiflix.svg"
                  alt="hiflix"
                />
              </div>
            </div>
          </section>
          <section className="footer-section mb-[30px] min-w-[200px] flex-[1_1_200px]">
            <h3 className="text-[1.2rem] mb-[20px]">Follow us</h3>
            <div className="social-links flex flex-col gap-[15px]">
              <a
                href="#"
                className="social-link flex items-center gap-[10px] no-underline text-[#6e7191]"
              >
                <img
                  src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/facebook.svg"
                  alt="facebook"
                  className="w-[20px] h-[20px] [transition:transform_0.3s] hover:scale-[1.2]"
                />
                Tickitz Cinema id
              </a>
              <a
                href="#"
                className="social-link flex items-center gap-[10px] no-underline text-[#6e7191]"
              >
                <img
                  src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/instagram.svg"
                  alt="instagram"
                  className="w-[20px] h-[20px] [transition:transform_0.3s] hover:scale-[1.2]"
                />
                tickitz.id
              </a>
              <a
                href="#"
                className="social-link flex items-center gap-[10px] no-underline text-[#6e7191]"
              >
                <img
                  src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/twitter.svg"
                  alt="twitter"
                  className="w-[20px] h-[20px] [transition:transform_0.3s] hover:scale-[1.2]"
                />
                tickitz.id
              </a>
              <a
                href="#"
                className="social-link flex items-center gap-[10px] no-underline text-[#6e7191]"
              >
                <img
                  src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/youtube.svg"
                  alt="youtube"
                  className="w-[20px] h-[20px] [transition:transform_0.3s] hover:scale-[1.2]"
                />
                Tickitz Cinema id
              </a>
            </div>
          </section>
        </div>
        <div className="copyright text-center text-[#6e7191] px-[0] py-[20px] w-full">
          © 2020 Tickitz. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
