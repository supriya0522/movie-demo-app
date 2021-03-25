import './modal.css';
import React, { useEffect } from "react";
import { Swiperwrapper, MainCardImg, MainMovieCard } from './styles';

const AutoPlayMovie = ({ autoplayList }) => {
    useEffect(() => {
        autoplayList.forEach((element, index) => {
            if (index > 5) {
                autoplayList.splice(index);
            }
        });
    })
    return (
        <div className="swiper-container2">
            <Swiperwrapper className="swiper-wrapper">
                {
                    autoplayList.map((data, index) => {
                        return (
                            <div className="swiper-slide" key={index}>
                                <MainMovieCard>
                                    <MainCardImg src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt="1212"></MainCardImg>
                                </MainMovieCard>
                            </div>
                        )
                    })
                }
            </Swiperwrapper>
        </div>
    );
};

export default AutoPlayMovie;