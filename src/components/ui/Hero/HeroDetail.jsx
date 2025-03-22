import React from "react";

function HeroDetail({
  imageUrl,
  title,
  genres,
  overview,
  release_date,
  runtime,
  production_companies,
  backdrop,
  id,
}) {
  console.log(genres);
  return (
    <>
      <header className="banner w-full h-[200px] sm:h-[300px] md:h-[400px] overflow-hidden">
        <img
          src={backdrop}
          alt={title}
          className="w-full h-full object-cover"
        />
      </header>
      <div className="container max-w-[1000px] mx-auto px-4 md:px-5 lg:px-0 bg-white">
        <section className="movie-details flex flex-col md:flex-row gap-[20px]">
          {/* Movie poster */}
          <div className="movie-poster w-[150px] md:w-[190px] mx-auto md:mx-0 relative md:bottom-[120px] -mt-10 md:mt-0">
            <img
              src={imageUrl}
              alt={`${title} poster`}
              className="w-full rounded-md md:rounded-none shadow-md"
            />
          </div>
          {/* Movie information */}
          <div className="movie-info flex-1 pt-[10px] md:pt-[20px]">
            <h1 className="movie-title text-[20px] md:text-[24px] font-bold mb-[10px] md:mb-[15px] text-[#222] text-center md:text-left">
              {title}
            </h1>
            {/* Genres */}
            <div className="movie-genres flex flex-wrap justify-center md:justify-start gap-[10px] mb-[15px] md:mb-[20px]">
              {genres.map((genre) => (
                <span
                  key={genre.id}
                  className="genre px-[15px] py-[5px] rounded-[20px] text-[12px] md:text-[14px] text-[#999] bg-[#f5f5f5]"
                >
                  {genre.name}
                </span>
              ))}
            </div>
            {/* Movie metadata */}
            <div className="movie-metadata grid grid-cols-1 sm:grid-cols-2 mb-[20px]">
              <div className="metadata-item mb-[15px] md:mb-[20px]">
                <div className="metadata-label text-[14px] text-[#999] mb-[3px] md:mb-[5px]">
                  Release date
                </div>
                <div className="metadata-value text-[13px] md:text-[14px] text-[#333]">
                  {release_date}
                </div>
              </div>
              <div className="metadata-item mb-[15px] md:mb-[20px]">
                <div className="metadata-label text-[14px] text-[#999] mb-[3px] md:mb-[5px]">
                  Director
                </div>
                <div className="metadata-value text-[13px] md:text-[14px] text-[#333]">
                  Jon Watts
                </div>
              </div>
              <div className="metadata-item mb-[15px] md:mb-[20px]">
                <div className="metadata-label text-[14px] text-[#999] mb-[3px] md:mb-[5px]">
                  Duration
                </div>
                <div className="metadata-value text-[13px] md:text-[14px] text-[#333]">
                  {runtime}
                </div>
              </div>
              <div className="metadata-item mb-[15px] md:mb-[20px]">
                <div className="metadata-label text-[14px] text-[#999] mb-[3px] md:mb-[5px]">
                  Casts
                </div>
                <div className="metadata-value text-[13px] md:text-[14px] text-[#333]">
                  Tom Holland, Michael Keaton, Robert Downey Jr
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Synopsis section */}
        <section className="synopsis mx-0 md:mx-[20px] mb-[30px] max-w-full md:max-w-[715px] relative md:bottom-[50px]">
          <h2 className="text-[18px] mb-[10px] md:mb-[15px] font-semibold">
            Synopsis
          </h2>
          <p className="text-[13px] md:text-[14px] font-normal leading-[24px] md:leading-[28px] tracking-[0.75px] text-[#a0a3bd]">
            {overview}
          </p>
        </section>
      </div>
    </>
  );
}

export default HeroDetail;
