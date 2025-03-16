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
      <>
        <header className="banner w-full h-[400px] overflow-hidden">
          <img
            src={backdrop}
            alt={title}
            className="w-full h-full object-cover"
          />
        </header>
        <div className="container max-w-[1000px] mx-[auto] my-[0] bg-[white]">
          <section className="movie-details flex gap-[20px] flex-wrap">
            {/* Movie poster */}
            <div className="movie-poster flex-[0_0_190px] ml-[20px] relative bottom-[120px]">
              <img
                src={imageUrl}
                alt="Spider-Man: Homecoming poster"
                className="w-full rounded-none [box-shadow:0_2px_6px_rgba(0,_0,_0,_0.1)]"
              />
            </div>
            {/* Movie information */}
            <div className="movie-info flex-[1] pt-[20px] pr-[20px]">
              <h1 className="movie-title text-[24px] font-bold mb-[15px] text-[#222]">
                {title}
              </h1>
              {/* Genres */}
              <div className="movie-genres flex gap-[10px] mb-[20px]">
                {genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="genre px-[15px] py-[5px] rounded-[20px] text-[14px] text-[#999] bg-[#f5f5f5]"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
              {/* Movie metadata */}
              <div className="movie-metadata flex flex-wrap mb-[20px]">
                <div className="metadata-item flex-[0_0_34%] mb-[20px]">
                  <div className="metadata-label text-[14px] text-[#999] mb-[5px]">
                    Release date
                  </div>
                  <div className="metadata-value text-[14px] text-[#333]">
                    {release_date}
                  </div>
                </div>
                <div className="metadata-item flex-[0_0_34%] mb-[20px]">
                  <div className="metadata-label text-[14px] text-[#999] mb-[5px]">
                    Director
                  </div>
                  <div className="metadata-value text-[14px] text-[#333]">
                    Jon Watts
                  </div>
                </div>
                <div className="metadata-item flex-[0_0_34%] mb-[20px]">
                  <div className="metadata-label text-[14px] text-[#999] mb-[5px]">
                    Duration
                  </div>
                  <div className="metadata-value text-[14px] text-[#333]">
                    {runtime}
                  </div>
                </div>
                <div className="metadata-item flex-[0_0_34%] mb-[20px]">
                  <div className="metadata-label text-[14px] text-[#999] mb-[5px]">
                    Casts
                  </div>
                  <div className="metadata-value text-[14px] text-[#333]">
                    Tom Holland, Michael Keaton, Robert Downey Jr
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Synopsis section */}
          <section className="synopsis mt-[0] mx-[20px] mb-[30px] max-w-[715px] relative bottom-[50px]">
            <h2 className="text-[18px] mb-[15px] font-semibold">Synopsis</h2>
            <p className="text-[14px] font-normal leading-[28px] tracking-[0.75px] text-[#a0a3bd]">
              {overview}
            </p>
          </section>
        </div>
      </>
    </>
  );
}

export default HeroDetail;
