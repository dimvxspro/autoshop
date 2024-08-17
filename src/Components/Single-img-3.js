import React from "react";
import serviceImg from "../assets/image/single-img-3/service.jpg";


export function SingleImg3() {
    return (
        <div className="container my-5">
            <div className="row align-items-center p-3 p-sm-0">
                <div className="col-12 col-lg-6 order-1 order-lg-0">

                    <div className="row">
                        <div className="col-12 overlay-text text-h2 text-lg-start text-center pt-lg-0 pt-3 pb-lg-0 pb-2">
                            <p className="dm-sans-bold ft-40 overlay-text">
                                Service Options Offered by BoxCar
                            </p>
                            <p className="dm-sans-regular ft-15 text-lg-start text-center">Choose from thousands of vehicles from multiple brands
                                and buy
                                online with Click & <br/>
                                Drive, or visit us at one of our dealerships today.</p>

                            <div className="row">
                                <div className="col-12 col-lg-7 text-center text-lg-start d-grid mx-auto mx-lg-0">
                                    <button className="btn py-3 calc-btn">See Your Service Options <i
                                        className="bi bi-arrow-up-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-12 col-lg-6 order-0 order-lg-1">
                    <img src={serviceImg} className="img-fluid" alt=""/>
                </div>
            </div>
        </div>
    );
}