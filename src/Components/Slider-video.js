import React from "react";

export function SliderVideo() {
    return (
        <div className="container px-5 px-xxl-0">
            <div className="row align-items-center">
                <div className="col-12 col-xxl-6 position-relative p-0" data-aos="fade-up" data-aos-delay="200">
                    <div className="video-wrapper borderr">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe
                                title="YouTube Video"
                                className="embed-responsive-item"
                                src="https://www.youtube.com/embed/OH0RdNY3oDU"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xxl-6 p-0" data-aos="fade-up" data-aos-delay="300">
                    <div className="slider-bg-color">
                        <h1 className="dm-sans-bold ft-40 text-center pt-3 pt-xxl-1 pb-3 pb-xxl-0">Get A Fair Price For Your Car Sell To Us Today</h1>
                        <p className="dm-sans-regular ft-15 px-3 ">
                            We are committed to providing our customers with exceptional service, competitive
                            pricing, and a wide range of benefits.
                        </p>
                        <ul className="custom-list px-3 ">
                            <li className="dm-sans-medium ft-15">We are the UK’s largest provider, with more patrols in more places</li>
                            <li className="dm-sans-medium ft-15">You get 24/7 roadside assistance</li>
                            <li className="dm-sans-medium ft-15">We fix 4 out of 5 cars at the roadside</li>
                        </ul>
                        <div className="d-flex align-items-center justify-content-center pb-4">
                            <button className="btn btn-primary  py-3 calc-btn">Get Started <i className="bi bi-arrow-up-right"></i></button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

