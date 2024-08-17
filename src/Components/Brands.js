import React from "react";
import audiIcon from '../assets/image/brands/audi.jpg.png';
import vwIcon from '../assets/image/brands/volkswagen.jpg.png';
import fordIcon from '../assets/image/brands/ford.jpg.png';
import mercedesIcon from '../assets/image/brands/mercedes.jpg.png';
import bmwIcon from '../assets/image/brands/bmw.jpg.png';
import peugeotIcon from '../assets/image/brands/peugeot.jpg.png';
import { Link } from 'react-router-dom';

export function Brands() {
    return (
        <div className="container my-5">
            <div className="row pb-3" data-aos="fade-up" data-aos-delay="200">
                <div className="col-sm-8 col-12 text-sm-start text-center">
                    <h2 className="primary-color dm-sans-bold text-h2">Explore Our Premium Brands</h2>
                </div>
                <div className="col-sm-4 col-12 pt-sm-0 pt-3 pb-sm-0 pb-4 text-sm-end text-center">
                    <a href=""><Link to="/index"><p className="ft-18 primary-color dm-sans-medium mb-0 view-all">Show All Brands <i className="bi bi-arrow-up-right"></i></p></Link></a>
                </div>
            </div>
            <div className="row gy-3">

                <div className="col-6 col-sm-4 col-lg-2 " data-aos="fade-up" data-aos-delay="200">
                    <div className=" border-16 brands-border-color">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center pt-3">
                                <img src={audiIcon}/>
                            </div>
                            <div className="col-12 d-flex justify-content-center pt-1 pb-1">
                                <p>Audi</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-6 col-sm-4 col-lg-2 " data-aos="fade-up" data-aos-delay="300">
                    <div className=" border-16 brands-border-color">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center pt-3">
                                <img src={mercedesIcon}/>
                            </div>
                            <div className="col-12 d-flex justify-content-center pt-1 pb-1">
                                <p>Mercedes</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-sm-4 col-lg-2 " data-aos="fade-up" data-aos-delay="400">
                    <div className=" border-16 brands-border-color">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center pt-3">
                                <img src={bmwIcon}/>
                            </div>
                            <div className="col-12 d-flex justify-content-center pt-1 pb-1">
                                <p>BMW</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-sm-4 col-lg-2 " data-aos="fade-up" data-aos-delay="500">
                    <div className=" border-16 brands-border-color">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center pt-3">
                                <img src={vwIcon}/>
                            </div>
                            <div className="col-12 d-flex justify-content-center pt-1 pb-1">
                                <p>Volkswagen</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-6 col-sm-4 col-lg-2 " data-aos="fade-up" data-aos-delay="600">
                    <div className=" border-16 brands-border-color">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center pt-3">
                                <img src={fordIcon}/>
                            </div>
                            <div className="col-12 d-flex justify-content-center pt-1 pb-1">
                                <p>Ford</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-sm-4 col-lg-2 " data-aos="fade-up" data-aos-delay="700">
                    <div className=" border-16 brands-border-color">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center pt-3">
                                <img src={peugeotIcon}/>
                            </div>
                            <div className="col-12 d-flex justify-content-center pt-1 pb-1">
                                <p>Peugeot</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    );
}