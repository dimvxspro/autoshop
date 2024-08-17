import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import signIcon from '../assets/image/reviews/sign-icon.svg';
import review1 from '../assets/image/reviews/review-1.png';
import review2 from '../assets/image/reviews/review-2.png';
import review3 from '../assets/image/reviews/review-3.png';

export function Reviews1() {
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
            <div className="container py-5">

                <div className="row gx-3 py-5">
                    <div className="col-12">
                        <div className="row d-flex">
                            <div className="col-6 align-content-center" data-aos="fade-up" data-aos-delay="200">
                                <h2 className="dm-sans-bold">What our customers say</h2>
                            </div>
                            <div className="col-6 align-content-center" data-aos="fade-up" data-aos-delay="200">
                                <p className="dm-sans-regular ft-15 text-end">Rated 4.7 / 5 based on 28,370 reviews Showing our 4 & 5 star reviews</p>
                            </div>
                        </div>
                    </div>
                    <div className="slider-container" data-aos="fade-up" data-aos-delay="300">
                        <Slider {...settings}>

                            {/* 1 rating*/}
                            <div className="col-3 px-3 py-5" >
                                <div className="rating bg-white py-3 px-4 border-16">
                                    <div className="row">
                                        <div className="col-10">
                                            <h4 className="pt-2 dm-sans-medium">Great Work</h4>
                                        </div>
                                        <div className="col-2">
                                            <img src={signIcon} className="img-fluid" alt=""/>
                                        </div>
                                        <p className="ft-15 dm-sans-regular">
                                            “Amazing design, easy to customize and a design
                                            quality superlative account on its cloud platform for
                                            the optimized performance. And we didn’t on our
                                            original designs.”
                                        </p>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-3">
                                            <img src={review1} className="img-fluid" alt=""/>
                                        </div>
                                        <div className="col-9 ps-0 mb-0">
                                            <p className="dm-sans-medium ft-16 mb-0">Leslie Alexander</p>
                                            <p className="dm-sans-regular ft-14">Facebook</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* 2 rating*/}
                            <div className="col-3 px-3 py-5">
                                <div className="rating bg-white py-3 px-4 border-16">
                                    <div className="row">
                                        <div className="col-10">
                                            <h4 className="pt-2 dm-sans-medium">Awesome Design</h4>
                                        </div>
                                        <div className="col-2">
                                            <img src={signIcon} className="img-fluid" alt=""/>
                                        </div>
                                        <p className="ft-15 dm-sans-regular">
                                            “Sed ut perspiciatis unde omnis iste natus error sit
                                            voluptatem accusantium doloremque laudantium,
                                            totam rem aperiam, eaque ipsa quae ab illo
                                            inventore veritatis et. ”
                                        </p>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-3">
                                            <img src={review2} className="img-fluid" alt=""/>
                                        </div>
                                        <div className="col-9 ps-0 mb-0">
                                            <p className="dm-sans-medium ft-16 mb-0">Jenny Wilson</p>
                                            <p className="dm-sans-regular ft-14">UI/UX Designer</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* 3 rating*/}
                            <div className="col-3 px-3 py-5">
                                <div className="rating bg-white py-3 px-4 border-16">
                                    <div className="row">
                                        <div className="col-10">
                                            <h4 className="pt-2 dm-sans-medium">Perfect Quality</h4>
                                        </div>
                                        <div className="col-2">
                                            <img src={signIcon} className="img-fluid" alt=""/>
                                        </div>
                                        <p className="ft-15 dm-sans-regular">
                                            “At vero eos et accusamus et iusto odio dignissimos
                                            ducimus qui blanditiis praesentium voluptatum
                                            deleniti atque corrupti quos dolores et quas
                                            molestias excepturi sint occaecati.”
                                        </p>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-3">
                                            <img src={review3} className="img-fluid" alt=""/>
                                        </div>
                                        <div className="col-9 ps-0 mb-0">
                                            <p className="dm-sans-medium ft-16 mb-0">Courtney Henry</p>
                                            <p className="dm-sans-regular ft-14">Software Developer</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>

            </div>
        </div>

    );
}
