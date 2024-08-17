import React from "react";
import bgImg from "../assets/image/single-img-2/bg-img.png";

export function SingleImg2(){
    return (
        <section style={{
            backgroundImage: `url(${bgImg})`,
            width: '100%',
            height: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }}>
            <div className="container mt-5 py-5">
                <div className="row py-5">
                    <div className="col-12 col-sm-12 col-lg-6 mt-5 pt-5">
                        <h1 className="text-capitalize text-white text-video-slider1" data-aos="fade-up" data-aos-delay="200">
                            We make finding the
                            right car simple
                        </h1>
                    </div>
                    <div className="col-12 col-lg-8 mt-3" data-aos="fade-up" data-aos-delay="300">
                        <button className="btn btn-lg btn-outline-white ft-15 dm-sans-medium py-3 px-5">Find Out More <i className="bi bi-arrow-up-right"></i></button>
                    </div>
                </div>
            </div>
        </section>



    );
}