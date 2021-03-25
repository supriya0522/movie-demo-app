import './modal.css';
import React from "react";
import { Swiperwrapper, MovieCard, CardImg } from './styles';

const UpcomingMovies = ({ movieList , query , getModalData}) => {
    return (
        <div>
        {
            query !== '' ?
              <p className="upcoming-movie-title">Movies</p>
              :
              <p className="upcoming-movie-title">Upcoming Movies</p>
          }
          <div className="swiper-container">
            <Swiperwrapper className="swiper-wrapper">
              {
                movieList.map((data, index) => {
                  return (
                    <div className="swiper-slide" key={index} onClick={() => getModalData(data.id, 'movie')}>
                      <MovieCard>
                        <CardImg src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt="1212"></CardImg>
                      </MovieCard>
                    </div>
                  )
                })
              }
            </Swiperwrapper>
            {/* <div className="swiper-pagination"></div> */}
          </div>
          </div>
    );
};

export default UpcomingMovies;