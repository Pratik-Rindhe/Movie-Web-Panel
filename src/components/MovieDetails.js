import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "./Header";
const IMAGE_URL = "https://image.tmdb.org/t/p/w200"; // Base image URL

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
        );
        if (!movieResponse.ok) {
          throw new Error("Failed to fetch movie details.");
        }
        const movieData = await movieResponse.json();
        setDetails(movieData);

        const creditsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
        );
        if (!creditsResponse.ok) {
          throw new Error("Failed to fetch movie credits.");
        }
        const creditsData = await creditsResponse.json();

        setCast(creditsData.cast);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovieDetails();
  }, [id]);

  if (!details || cast.length === 0) {
    return <div>Loading...</div>;
  }

  const {
    original_title,
    vote_average,
    genre_ids,
    release_date,
    overview,
    poster_path,
    backdrop_path,
  } = details;
  const formattedDate = new Date(release_date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Functions for pagination (Previous and Next movie IDs) gogo
  const goToPreviousMovie = () => {
    navigate(`/movie/${parseInt(id) - 1}`);
  };

  const goToNextMovie = () => {
    navigate(`/movie/${parseInt(id) + 1}`);
  };

  return (
    <>
      <div className="details-cast-section">
        <Header />
        <button className="back-button" onClick={() => navigate("/")}>
          Back to Home
        </button>
        <div className="details-section">
          <div className="details">
            <div className="bg">
              <img
                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                alt="movie"
                className="movie-item"
              />
              <div className="bg-items">
                <h3 className="details-title">{original_title}</h3>
                <p className="details-rating">Rating: {vote_average}</p>
                <h3 className="genres">Genres: {genre_ids}</h3>
                <p className="details-realise-date">
                  Release Date: {formattedDate}
                </p>
              </div>
            </div>
            <div className="movie-details">
              <h2 className="overview">Overview:</h2>
              <p className="paragraph">{overview}</p>
            </div>
          </div>
          <div className="background-image">
            <img
              src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
              alt="bg-"
              className="item-images"
            />
          </div>
        </div>
        <div className="cast">
          <h2 className="cast-heading">Cast</h2>
          <ul className="cast-list">
            {cast.map((actor) => (
              <li key={actor.id} className="cast-item">
                <img
                  src={
                    actor.profile_path
                      ? `${IMAGE_URL}${actor.profile_path}`
                      : "/default-profile.jpg"
                  }
                  alt={actor.name}
                  className="actor-image"
                />
                <div className="actor-details">
                  <p className="actor-name">{actor.name}</p>
                  <p className="character-name">as {actor.character}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

         {/* this is for pagination  gogo */}
        <div className="pagination">  
          <button onClick={goToPreviousMovie} disabled={id <= 1}>
            Previous
          </button>
          <button onClick={goToNextMovie}>Next</button>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
