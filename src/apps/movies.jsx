
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { getUpcomingMoview, searchForMovie, searchForTvShows, getMovieDetail, getTrendingMovieList, getTvshowsDetail } from '../store/actions/index';
import { connect } from "react-redux";
import './movies.scss';
import Swiper, { Autoplay } from 'swiper';
import { StyledNavbar, Container, StyledInput } from './styles';
import Modal from './Modal.js';
import logo from '../assets/theater.png';
import AutoPlayMovie from './autoPlayMovies';
import UpcomingMovies from './upcomingMovies';
import TrendingMovie from './trensdingMovies';
import TVShows from './tvShows';

const MovieListing = (props) => {
  Swiper.use([Autoplay]);
  let { movieList, tvShows, movieDetail, trendingMovies } = props.movies;
  const [modal, showModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [query, setQuery] = useState("");
  let page = 1;
  let autoPlayList = [];
  autoPlayList.push(...movieList.results);
  new Swiper('.swiper-container2', {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    init: true,
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
        spaceBetween: 5,
      },
    }
  });
  if (swiper[0] !== undefined) {
    swiper[0].on('reachEnd', function () {
      page = page + 1;
      // props.dispatch(getUpcomingMoview(page, movieList));
      swiper[0].init();
    });
  }

  useEffect(() => {
    props.dispatch(getUpcomingMoview(page));
    props.dispatch(getTrendingMovieList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearchSubmit = (queries) => {
    setQuery(queries);
    if (queries !== "") {
      props.dispatch(searchForMovie(queries));
      props.dispatch(searchForTvShows(queries));
    }
  };

  const getModalData = (id, For) => {
    if (For === 'movie') {
      props.dispatch(getMovieDetail(id));
    } else {
      props.dispatch(getTvshowsDetail(id));
    }
    setModalData(movieDetail)
    showModal(true);
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
        <AutoPlayMovie autoplayList={autoPlayList}></AutoPlayMovie>
        <div className="listing">
          <UpcomingMovies movieList={movieList.results} query={query} getModalData={getModalData}></UpcomingMovies>
          <TrendingMovie trendingMovies={trendingMovies.results} query={query} getModalData={getModalData}></TrendingMovie>
          <TVShows tvShows={tvShows.results} query={query} getModalData={getModalData}></TVShows>

        </div>
      </div>
      <Modal show={modal} className="row" movieDetail={movieDetail} showModal={showModal} modalData={modalData}></Modal>
    </Container>
  );
};
const select = (state) => ({
  movies: state.movies
})
export default connect(select)(withRouter(MovieListing));