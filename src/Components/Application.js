import React from "react";
import backgroundImg from "../assets/image/application/Background.png";
import link1 from "../assets/image/application/Link.png";
import link2 from "../assets/image/application/Link2.png";

export function Application() {
    return (
        <div className="px-5 mx-5 d-xl-block d-none">
            <section className="mb-3 pb-5" style={{
                backgroundImage: `url(${backgroundImg})`,
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="container mt-5 pt-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="row py-5">
                                <div className="col-6" data-aos="fade-up" data-aos-delay="200">
                                    <p className="dm-sans-bold ft-40 overlay-text text-capitalize">
                                        Shop used cars, whether
                                        you're
                                        on the lot or on the go
                                    </p>
                                </div>
                                <div className="col-12 mb-2">
                                    <div className="col-6" data-aos="fade-up" data-aos-delay="300">
                                        <p>
                                            Download our app to save cars and create alerts, scan window stickers on our lot for more details,
                                            and even call dibs on a car by holding it for up to 7 days.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-4 col-lg-2 me-lg-4 me-xl-0" data-aos="fade-up" data-aos-delay="400">
                                    <a href="/" tabIndex="0">
                                        <img className="bn45" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="bn45"/>
                                    </a>
                                </div>

                                <div className="col-12 col-sm-4 col-lg-2 " data-aos="fade-up" data-aos-delay="500">
                                    <a href="/" tabIndex="0">
                                        <img className="bn46" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="bn45"/>
                                    </a>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

