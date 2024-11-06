import React from 'react';
import Slider from 'react-slick';
import sliderImgOne from './../../../assets/img/sliderImgOne.avif'
import sliderImgTwo from './../../../assets/img/sliderImgTwo.jpg'
import sliderImgThree from './../../../assets/img/sliderImgThree.jpg'
import sliderImgFour from './../../../assets/img/sliderImgFour.jpg'
import sliderImgFive from './../../../assets/img/sliderImgFive.jpg'
import sliderImgSix from './../../../assets/img/sliderImgSix.jpg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className="container">
            <div className="slider-group">
                <Slider {...settings}>
                    <div>
                        <img src={sliderImgOne} alt="img"/>
                    </div>
                    <div>
                        <img src={sliderImgTwo} alt="img"/>
                    </div>
                    <div>
                        <img src={sliderImgThree} alt="img"/>
                    </div>
                    <div>
                        <img src={sliderImgFour} alt="img"/>
                    </div>
                    <div>
                        <img src={sliderImgFive} alt="img"/>
                    </div>
                    <div>
                        <img src={sliderImgSix} alt="img"/>
                    </div>
                    <div>
                        <img src={sliderImgOne} alt="img"/>
                    </div>
                    <div>
                        <img src={sliderImgTwo} alt="img"/>
                    </div>
                    <div>
                        <img src={sliderImgThree} alt="img"/>
                    </div>
                    <div>
                        <img src={sliderImgFour} alt="img"/>
                    </div>
                    <div>
                        <img src={sliderImgFive} alt="img"/>
                    </div>
                    <div>
                        <img src={sliderImgSix} alt="img"/>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Hero;