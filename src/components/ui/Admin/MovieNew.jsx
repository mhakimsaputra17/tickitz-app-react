import React from "react";

function MovieNew() {
  return (
    <>
      <div className="body-container">
        <main className="container">
          <h1>Add New Movie</h1>
          <form>
            <div className="form-group">
              <label htmlFor="upload">Upload Image</label>
              <button type="button" className="btn btn-upload">
                Upload
              </button>
            </div>
            <div className="form-group">
              <label htmlFor="movie-name">Movie Name</label>
              <input
                type="text"
                id="movie-name"
                defaultValue="Spider-Man: Homecoming"
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                id="category"
                defaultValue="Action, Adventure, Sci-Fi"
              />
            </div>
            <div className="form-group">
              <label htmlFor="release-date">Release date</label>
              <input type="text" id="release-date" defaultValue="07/05/2020" />
            </div>
            <div className="form-group">
              <label htmlFor="duration">Duration (hour / minute)</label>
              <div className="duration-container">
                <input type="text" id="duration-hour" defaultValue={2} />
                <input type="text" id="duration-minute" defaultValue={13} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="director">Director Name</label>
              <input type="text" id="director" defaultValue="Jon Watts" />
            </div>
            <div className="form-group">
              <label htmlFor="cast">Cast</label>
              <input
                type="text"
                id="cast"
                defaultValue="Tom Holland, Michael Keaton, Robert Dow..."
              />
            </div>
            <div className="form-group">
              <label htmlFor="synopsis">Synopsis</label>
              <textarea
                id="synopsis"
                rows={8}
                defaultValue={
                  "Thrilled by his experience with the Avengers, Peter returns home, where he\n      lives with his Aunt May, I"
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="location">Add Location</label>
              <input
                type="text"
                id="location"
                defaultValue="Purwokerto, Bandung, Bekasi"
              />
            </div>
            <div className="form-group">
              <label htmlFor="date-time">Set Date &amp; Time</label>
              <div className="date-select">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                    <line x1={16} y1={2} x2={16} y2={6} />
                    <line x1={8} y1={2} x2={8} y2={6} />
                    <line x1={3} y1={10} x2={21} y2={10} />
                  </svg>
                </span>
                <span>Set a date</span>
                <span className="arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </div>
              <div className="date-time-container">
                <button type="button" className="add-time-btn">
                  +
                </button>
                <div className="time-inputs">
                  <span className="time-input">08:30am</span>
                  <span className="time-input">10:30pm</span>
                </div>
              </div>
            </div>
            <div className="divider" />
            <button type="submit" className="btn btn-save">
              Save Movie
            </button>
          </form>
        </main>
      </div>
    </>
  );
}

export default MovieNew;
