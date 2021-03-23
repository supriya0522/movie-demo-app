import './modal.css';
import React, { useEffect, useRef, useCallback } from "react";
import { MovieTitle, RatingTitle, ReleaseDate, MovieDetail, RatingDetail, MovieDescription } from './styles';

const Modal = ({ show, movieDetail, showModal}) => {
const node = useRef(null);

  const showHideClassName = show ? "modal" : "modal display-none";
  const closeModal = useCallback((e) => {
    if (node.current !== null) {
      movieDetail = {};
      if (node.current.contains(e.target)) {
        return;
      } else {
        showModal(false);
      }
    }
  });
  useEffect(() => {
    document.addEventListener("mousedown", closeModal);
  }, [closeModal]);
  return (
    <div className={showHideClassName}>
      <div className="modal-main" ref={node}>
        <MovieDetail>
          <div className="details-wrapper">
            {
              movieDetail.original_title ? 
              <MovieTitle>{movieDetail.original_title}</MovieTitle>
              : 
              <MovieTitle>{movieDetail.original_name}</MovieTitle>
            }
            <p className="movie-tag-line">{movieDetail.tagline}</p>
            <RatingDetail>
              <RatingTitle>Rating: {Math.floor(movieDetail.vote_average * 100) / 10}% </RatingTitle>
            </RatingDetail>
            <ReleaseDate>Release Date: {movieDetail.release_date}</ReleaseDate>
            <ReleaseDate>Runtime: {movieDetail.runtime}m</ReleaseDate>
            <MovieDescription>
              {movieDetail.overview}
            </MovieDescription>
          </div>
          <div className="poster-container">
            {
              movieDetail.backdrop_path ? 
              <img src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`} alt="1212" className="images"></img>
              :
              <img src={`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`} alt="1212" className="images"></img>
            }
          </div>
        </MovieDetail>
      </div>
    </div>
  );
};

export default Modal;