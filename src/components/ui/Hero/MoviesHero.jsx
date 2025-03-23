import React from "react";

function MoviesHero() {
  return (
    <>
      <section className="hero bg-[linear-gradient(rgba(0,_0,_0,_0.6),_rgba(0,_0,_0,_0.6)),url(https://github.com/mhakimsaputra17/weekly-task3/blob/main/assets/images/backgrounds/marvel2.png?raw=true)] bg-cover bg-center flex items-center justify-start text-[white] px-[5%] py-[0] scale-100 relative w-full min-h-[400px] sm:min-h-[450px] md:min-h-[500px] h-[50vh] md:h-[70vh]">
        <div className="hero-content max-w-[800px] flex flex-col gap-4 md:gap-6">
          <span className="hero-label text-[0.75rem] md:text-[0.875rem] font-semibold tracking-[1px] uppercase">
            LIST MOVIE OF THE WEEK
          </span>
          <h1 className="hero-title text-[1.75rem] sm:text-[2.25rem] md:text-[3rem] font-normal leading-[1.2] md:leading-[60px] m-0 text-[#fff] tracking-[1px] w-full md:w-[560px] max-w-full">
            Experience the Magic of Cinema: Book Your Tickets Today
          </h1>
          <div className="hero-pagination">
            <span className="dot active" />
            <span className="dot" />
            <span className="dot" />
          </div>
        </div>
      </section>
    </>
  );
}

export default MoviesHero;
