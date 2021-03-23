
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { getUpcomingMoview, searchForMovie, searchForTvShows, getMovieDetail, getTrendingMovieList ,getTvshowsDetail } from '../store/actions/index';
import { connect } from "react-redux";
import './movies.scss';
import Swiper from 'swiper';
import { StyledNavbar, Container, Swiperwrapper, Swiperslide, MovieCard, CardImg, StyledInput } from './styles';
import Modal from './Modal.js';
import logo from '../assets/theater.png';

const RentedListing = (props) => {
  let { movieList, tvShows, movieDetail, trendingMovies } = props.movies;
  const [modal, showModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [query, setQuery] = useState("");
  new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      380: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 12,
      },
      1024: {
        slidesPerView: 7,
        spaceBetween: 12,
      },
    }
  });

  useEffect(() => {
    props.dispatch(getUpcomingMoview());
    props.dispatch(getTrendingMovieList());
  }, []);

  const handleSearchSubmit = (queries) => {
    setQuery(queries);
    props.dispatch(searchForMovie(queries));
    props.dispatch(searchForTvShows(queries));
  };

  const getModalData = (id, For) => {
    if (For === 'movie') {
      props.dispatch(getMovieDetail(id));
    } else {
      props.dispatch(getTvshowsDetail(id));
    }
    showModal(true);
    setModalData(movieDetail)
  }

  return (
    <Container className="full-height">
      <div className="listing">
        <StyledNavbar>
          <img src={logo} className="appLogo" alt="appLogo"></img>
          <StyledInput
            type="text"
            placeholder="Search"
            name="search"
            autoComplete="off"
            value={query}
            onChange={(event) => handleSearchSubmit(event.target.value)}
          />
        </StyledNavbar>
        <div className="listing">
          {
            query !== '' ?
              <p className="upcoming-movie-title">Movies</p>
              :
              <p className="upcoming-movie-title">Upcoming Movies</p>
          }
          <div className="swiper-container">
            <Swiperwrapper className="swiper-wrapper">
              {
                movieList.results.map((data, index) => {
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
            <div className="swiper-pagination"></div>
          </div>
          {
            query === '' && (
              <div className="swiper-container">
                <p className="trending-movie-title">Trending Movies</p>
                <Swiperwrapper className="swiper-wrapper">
                  {
                    trendingMovies.results.map((data, index) => {
                      return (
                        <Swiperslide className="swiper-slide" key={index} onClick={() => getModalData(data.id, 'movie')}>
                          <MovieCard>
                            <CardImg src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt="1212"></CardImg>
                          </MovieCard>
                        </Swiperslide>
                      )
                    })
                  }
                </Swiperwrapper>
                <div className="swiper-pagination"></div>
              </div>
            )
         }
          {
            query !== '' && (
              <div className="swiper-container">
                <p className="tv-shows-title">Tv Shows</p>
                <Swiperwrapper className="swiper-wrapper">
                  {
                    tvShows.results.map((data, index) => {
                      return (
                        <Swiperslide className="swiper-slide" key={index} onClick={() => getModalData(data.id, 'tv')}>
                          <MovieCard>
                            <CardImg src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt="1212"></CardImg>
                          </MovieCard>
                        </Swiperslide>
                      )
                    })
                  }
                </Swiperwrapper>
                <div className="swiper-pagination"></div>
              </div>
            )
          }
        </div>
      </div>
      <Modal show={modal} className="row" movieDetail={movieDetail} showModal={showModal} modalData={modalData}></Modal>
    </Container>
  );
};
const select = (state) => ({
  movies: state.movies
})
export default connect(select)(withRouter(RentedListing));