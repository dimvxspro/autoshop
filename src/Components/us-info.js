import React from "react";
import emailIcon from '../assets/image/get-in-touch/email.svg';
import phoneIcon from '../assets/image/get-in-touch/phone.svg';

export function UsInfo(){
    return(
        <div className="container my-5">
            <div className="row gy-4">
                <h2 className="dm-sans-bold"> Our Offices</h2>

                <div className="col-12 col-md-6 col-lg-4">
                    <p className="dm-sans-medium ft-18">San Francisco</p>
                    <p className="dm-sans-regular ft-15">416 Dewey Blvd, San Francisco,<br/>
                        CA 94116, USA</p>
                    <a href=""><p className="dm-sans-medium ft-15">See on Map <i className="bi bi-arrow-up-right"></i></p></a>
                    <div className="row gy-2">
                        <div className="col-12 col-md-5 col-lg-6 ft-14">
                            <img src={emailIcon} alt=""/> alild@boxcars.com
                        </div>
                        <div className="col-12 col-md-6 ft-14">
                            <img src={phoneIcon} className="img-fluid" alt=""/> +76 222 333 888
                        </div>
                    </div>
                </div>


                <div className="col-12 col-md-6 col-lg-4">
                    <p className="dm-sans-medium ft-18">New York</p>
                    <p className="dm-sans-regular ft-15">232-240 Wilson Ave, Brooklyn,<br/>
                        NY 11237, USA</p>
                    <a href=""><p className="dm-sans-medium ft-15">See on Map <i className="bi bi-arrow-up-right"></i></p></a>
                    <div className="row gy-2">
                        <div className="col-12 col-md-5 col-lg-6 ft-14">
                            <img src={emailIcon} alt=""/> alild@boxcars.com
                        </div>
                        <div className="col-12 col-md-6 ft-14">
                            <img src={phoneIcon} className="img-fluid" alt=""/> +76 222 333 888
                        </div>
                    </div>
                </div>


                <div className="col-12 col-md-6 col-lg-4">
                    <p className="dm-sans-medium ft-18">London</p>
                    <p className="dm-sans-regular ft-15">127-143 Borough High St,<br/>
                        London SE1 1NP, UK</p>
                    <a href=""><p className="dm-sans-medium ft-15">See on Map <i className="bi bi-arrow-up-right"></i></p></a>
                    <div className="row gy-2">
                        <div className="col-12 col-md-5 col-lg-6 ft-14">
                            <img src={emailIcon} alt=""/> alild@boxcars.com
                        </div>
                        <div className="col-12 col-md-6 ft-14">
                            <img src={phoneIcon} className="img-fluid" alt=""/> +76 222 333 888
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}