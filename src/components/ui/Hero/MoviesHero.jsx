import React from "react";

function MoviesHero() {
  return (
    <>
      <section className="hero bg-[linear-gradient(rgba(0,_0,_0,_0.6),_rgba(0,_0,_0,_0.6)),url(https://github.com/mhakimsaputra17/weekly-task3/blob/main/assets/images/backgrounds/marvel2.png?raw=true)]   bg-cover bg-center flex items-center justify-start text-[white] px-[5%] py-[0] scale-100 relative w-full h-[70vh] min-h-[500px]">
        <div className="hero-content max-w-[800px] flex flex-col gap-6">
          <span className="hero-label text-[0.875rem] font-semibold tracking-[1px] uppercase">
            LIST MOVIE OF THE WEEK
          </span>
          <h1 className="hero-title text-[3rem] font-normal leading-[60px] m-0 text-[#fff] tracking-[1px] w-[560px] h-[170px]">
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
