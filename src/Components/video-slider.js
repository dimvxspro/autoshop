import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import slider1 from "../assets/image/slider-1/1.png";
import slider2 from "../assets/image/slider-1/2.png";
import slider3 from "../assets/image/slider-1/3.png";
import slider4 from "../assets/image/slider-1/4.png";
import petrolIcon from "../assets/image/slider-1/petrol-white-icon.svg";
import milesIcon from "../assets/image/slider-1/miles-white-icon.svg";
import typeIcon from "../assets/image/slider-1/type-white-icon.svg";


const CarouselExampleDark = () => {
    return (

        <div id="carouselExampleDark" className="carousel carousel-dark slide bg-dark h-100" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src={slider1} className="d-block w-100" alt="First slide"/>
                    <div className="carousel-caption  d-flex align-items-center text-start text-white top-0 mb-0">
                        <div className="">
                            <div className="inner-block " data-aos="fade-up" data-aos-delay="200">
                                <h2 className="text-video-slider2">$35,000</h2>
                                <h1 className="text-video-slider1">Mercedes-Benz, C Class</h1>
                                <div className="text-white d-none d-sm-block">
                                    <div className="d-inline-block me-3"><img src={petrolIcon} alt=""/> Petrol </div>
                                    <div className="d-inline-block me-3"><img src={milesIcon} alt=""/> 100 Miles </div>
                                    <div className="d-inline-block me-3"><img src={typeIcon} alt=""/> Automatic </div>
                                </div>
                                <div className="text-start d-none d-sm-block  mt-4">
                                    <a className="btn btn  bg-white text-black">
                                        Learn More <i className="bi bi-arrow-up-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src={slider2} className="d-block w-100" alt="Second slide"/>
                    <div className="carousel-caption d-flex align-items-center text-start text-white top-0 mb-0">
                        <div className="">
                            <div className="inner-block">
                                <h2 className="text-video-slider2">$60,000</h2>
                                <h1 className="text-video-slider1">Mercedes-Benz, C Class</h1>
                                <div className="text-white  d-none d-sm-block">
                                    <div className="d-inline-block me-3"><img src={petrolIcon} alt=""/> Petrol </div>
                                    <div className="d-inline-block me-3"><img src={milesIcon} alt=""/> 100 Miles </div>
                                    <div className="d-inline-block me-3"><img src={typeIcon} alt=""/> Automatic </div>
                                </div>
                                <div className="text-start  d-none d-sm-block mt-4">
                                    <a className="btn btn-lg bg-white text-black">
                                        Learn More <i className="bi bi-arrow-up-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="carousel-item">
                    <img src={slider4} className="d-block w-100" alt="Third slide"/>
                    <div className="carousel-caption d-flex align-items-center text-start text-white top-0  mb-0">
                        <div className="">
                            <div className="inner-block">
                                <h2 className="text-video-slider2">$45,000</h2>
                                <h1 className="text-video-slider1">Ford Mustang, C Class</h1>
                                <div className="text-white d-none d-sm-block">
                                    <div className="d-inline-block me-3"><img src={petrolIcon} alt=""/> Petrol </div>
                                    <div className="d-inline-block me-3"><img src={milesIcon} alt=""/> 100 Miles </div>
                                    <div className="d-inline-block me-3"><img src={typeIcon} alt=""/> Automatic </div>
                                </div>
                                <div className="text-start d-none d-sm-block mt-4">
                                    <a className="btn btn-lg bg-white text-black">
                                        Learn More <i className="bi bi-arrow-up-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default CarouselExampleDark;
