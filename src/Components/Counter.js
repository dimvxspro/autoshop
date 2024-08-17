// src/Counter.js
import React, { useEffect, useRef } from 'react';
import { counterUp, startCounterWhenVisible } from './logic';

export const Counter = () => {
    const countersRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(startCounterWhenVisible, { threshold: 1.0 });

        countersRef.current.forEach(counter => observer.observe(counter));

        return () => observer.disconnect();
    }, []);


    return (
        <div className="container py-5 mb-md-4">
            <div className="row justify-content-center mb-0">
                <div className="col-12">
                    <div className="row gy-2 gx-2 d-flex justify-content-center">
                        <div className="col-6 col-lg-3">
                            <div className="d-flex justify-content-center align-items-center statistics-3-height">
                                <div className="text-center px-1">
                                    <h2 className="mb-0  dm-sans-bold  text-black mb-2">
                                        <span ref={el => countersRef.current[0] = el} data-toggle="counter-up" data-duration="2000">836</span>+
                                    </h2>
                                    <p className="px-1 mb-0 text-center dark-blue ft-15 dm-sans-regular  text-uppercase black ">CARS FOR SALE</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-6 col-lg-3">
                            <div className="d-flex justify-content-center align-items-center statistics-3-height">
                                <div className="text-center px-1">
                                    <h2 className="mb-0  dm-sans-bold  text-black mb-2">
                                        <span ref={el => countersRef.current[1] = el} data-toggle="counter-up" data-duration="2000">738</span>+
                                    </h2>
                                    <p className="px-1 mb-0 dark-blue ft-15 dm-sans-regular  text-uppercase black ">DEALER REVIEWS</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-6 col-lg-3">
                            <div className="d-flex justify-content-center align-items-center statistics-3-height">
                                <div className="text-center px-1">
                                    <h2 className="mb-0  dm-sans-bold  text-black mb-2">
                                        <span ref={el => countersRef.current[2] = el} data-toggle="counter-up" data-duration="2000">95</span>+
                                    </h2>
                                    <p className="px-1 mb-0 text-center dark-blue ft-15 dm-sans-regular  text-uppercase black ">VISITORS PER DAY</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-6 col-lg-3">
                            <div className="d-flex justify-content-center align-items-center statistics-3-height">
                                <div className="text-center px-1">
                                    <h2 className="mb-0  dm-sans-bold  text-black mb-2">
                                        <span ref={el => countersRef.current[3] = el} data-toggle="counter-up" data-duration="2000">238</span>+
                                    </h2>
                                    <p className="mb-0 px-1 text-center dark-blue ft-15 dm-sans-regular text-uppercase ">VERIFIED DEALERS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    );
};
