import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Rating() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="section bg-white-2">
            <div className="container py-2 py-lg-5">

                    <div className="row gx-3 py-2 py-lg-5">
                        <div className="col-12">
                            <div className="row d-flex">
                                <div className="col-6 align-content-center">
                                    <h2 className="dm-sans-bold" data-aos="fade-up" data-aos-delay="200">What our customers say</h2>
                                </div>
                                <div className="col-6 align-content-center">
                                    <p className="dm-sans-regular ft-15 text-end" data-aos="fade-up" data-aos-delay="300">Rated 4.7 / 5 based on 28,370 reviews Showing our 4 & 5 star reviews</p>
                                </div>
                            </div>
                        </div>
                        <div className="slider-container" data-aos="fade-up" data-aos-delay="400">
                            <Slider {...settings}>

                                {/* 1 rating*/}
                                <div className="col-3 px-2 py-2">
                                    <div className="rating bg-white py-3 px-3 border-16">
                                        <div className="row">
                                            <div className="col-6">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                            </div>
                                            <div className="col-6 text-end">
                                                <p className="dm-sans-regular ft-14"><i className="bi bi-check-circle-fill"></i> Verified</p>
                                            </div>
                                        </div>
                                        <p className="ft-16 dm-sans-medium">
                                            Sales process was simple and easy
                                        </p>
                                        <p className="dm-sans-regular ft-14">
                                            Sales process was simple and easy.
                                            Maximillion was friendly and I didn’t feel...
                                        </p>
                                        <p className="dm-sans-medium ft-14">Ali Tufan</p>
                                    </div>
                                </div>

                                {/* 2 rating*/}
                                <div className="col-3 px-2 py-2">
                                    <div className="rating bg-white py-3 px-3 border-16">
                                        <div className="row">
                                            <div className="col-6">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star"></i>
                                            </div>
                                            <div className="col-6 text-end">
                                                <p className="dm-sans-regular ft-14"><i className="bi bi-check-circle-fill"></i> Verified</p>
                                            </div>
                                        </div>
                                        <p className="ft-16 dm-sans-medium">
                                            Good job for project
                                        </p>
                                        <p className="dm-sans-regular ft-14">
                                            Sales process was simple and easy.
                                            Maximillion was friendly and I didn’t feel...
                                        </p>
                                        <p className="dm-sans-medium ft-14">John Doe</p>
                                    </div>
                                </div>

                                {/* 3 rating*/}
                                <div className="col-3 px-2 py-2">
                                    <div className="rating bg-white py-3 px-3 border-16">
                                        <div className="row">
                                            <div className="col-6">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star"></i>
                                                <i className="bi bi-star"></i>
                                                <i className="bi bi-star"></i>
                                            </div>
                                            <div className="col-6 text-end">
                                                <p className="dm-sans-regular ft-14"><i className="bi bi-check-circle-fill"></i> Verified</p>
                                            </div>
                                        </div>
                                        <p className="ft-16 dm-sans-medium">
                                            Sales process was simple and easy
                                        </p>
                                        <p className="dm-sans-regular ft-14">
                                            At Voiture what matters to us is making
                                            your car search and buying .
                                        </p>
                                        <p className="dm-sans-medium ft-14">Brooklyn Simmons</p>
                                    </div>
                                </div>

                                {/* 4 rating*/}
                                <div className="col-3 px-2 py-2">
                                    <div className="rating bg-white py-3 px-3 border-16">
                                        <div className="row">
                                            <div className="col-6">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                            </div>
                                            <div className="col-6 text-end">
                                                <p className="dm-sans-regular ft-14"><i className="bi bi-check-circle-fill"></i> Verified</p>
                                            </div>
                                        </div>
                                        <p className="ft-16 dm-sans-medium">
                                            Sales process was simple and easy
                                        </p>
                                        <p className="dm-sans-regular ft-14">
                                            Sales process was simple and easy.
                                            Maximillion was friendly and I didn’t feel...
                                        </p>
                                        <p className="dm-sans-medium ft-14">Augusta Silva</p>
                                    </div>
                                </div>

                                {/* 5 rating*/}
                                <div className="col-3 px-2 py-2">
                                    <div className="rating bg-white py-3 px-3 border-16">
                                        <div className="row">
                                            <div className="col-6">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>

                                            </div>
                                            <div className="col-6 text-end">
                                                <p className="dm-sans-regular ft-14"><i className="bi bi-check-circle-fill"></i> Verified</p>
                                            </div>
                                        </div>
                                        <p className="ft-16 dm-sans-medium">
                                            Sales process was simple and easy
                                        </p>
                                        <p className="dm-sans-regular ft-14">
                                            Sales process was simple and easy.
                                            Maximillion was friendly and I didn’t feel...
                                        </p>
                                        <p className="dm-sans-medium ft-14">Ali Tufan</p>
                                    </div>
                                </div>

                                {/* 6 rating*/}
                                <div className="col-3 px-2 py-2">
                                    <div className="rating bg-white py-3 px-3 border-16">
                                        <div className="row">
                                            <div className="col-6">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                            </div>
                                            <div className="col-6 text-end">
                                                <p className="dm-sans-regular ft-14"><i className="bi bi-check-circle-fill"></i> Verified</p>
                                            </div>
                                        </div>
                                        <p className="ft-16 dm-sans-medium">
                                            Sales process was simple and easy
                                        </p>
                                        <p className="dm-sans-regular ft-14">
                                            Sales process was simple and easy.
                                            Maximillion was friendly and I didn’t feel...
                                        </p>
                                        <p className="dm-sans-medium ft-14">Ali Tufan</p>
                                    </div>
                                </div>

                            </Slider>
                        </div>
                    </div>



            </div>
        </div>

    );
}

export default Rating;
