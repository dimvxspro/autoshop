import React from 'react';
import addressIcon from '../assets/image/get-in-touch/address.svg';
import emailIcon from '../assets/image/get-in-touch/email.svg';
import phoneIcon from '../assets/image/get-in-touch/phone.svg';

export function GetInTouch({ }) {
    return (
        <div className="container my-4 my-md-5">
            <div className="row">
                <div className="col-12 col-md-6">
                    <h2 className="dm-sans-bold text-start">Get In Touch</h2>
                    <p className="ft-15 dm-sans-regular">
                        Etiam pharetra egestas interdum blandit viverra morbi consequat mi non bibendum
                        egestas quam egestas nulla.
                    </p>
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control border-16" id="floatingInput1"/>
                                <label htmlFor="floatingInput1">First Name*</label>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control border-16" id="floatingInput2"/>
                                <label htmlFor="floatingInput2">Last Name*</label>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control border-16" id="floatingInput3"/>
                                <label htmlFor="floatingInput3">Email*</label>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control border-16" id="floatingInput4"/>
                                <label htmlFor="floatingInput4">Phone*</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                                <textarea className="form-control h-100 py-5" placeholder="Leave a comment here" id="floatingTextarea5"></textarea>
                                <label htmlFor="floatingTextarea5">Message</label>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 d-grid mt-2">
                            <button className="btn py-3 calc-btn">Send Message</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-5 offset-lg-1">
                    <div className="row d-flex justify-content-end border-16 border py-4 px-3">
                        <div className="col-12 ">
                            <h4 className="dm-sans-medium">Contact details</h4>
                            <p className="ft-15 dm-sans-regular">
                                Etiam pharetra egestas interdum blandit viverra morbi consequat
                                mi non bibendum egestas quam egestas nulla.
                            </p>
                        </div>
                        <div className="col-12">
                            <div className="row d-flex justify-content-start gy-1">
                                <div className="col-12 col-md-7">
                                    <div className="row">
                                        <div className="col-2">
                                            <img src={addressIcon} alt=""/>
                                        </div>
                                        <div className="col-10 text-start">
                                            <span className="dm-sans-medium">Address</span>
                                            <p className="ft-15">
                                                123 Queensberry Street, North
                                                Melbourne VIC3051, Australia.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-7">
                                    <div className="row">
                                        <div className="col-2">
                                            <img src={emailIcon} alt=""/>
                                        </div>
                                        <div className="col-10 text-start">
                                            <span className="dm-sans-medium">Email</span>
                                            <p className="ft-15">
                                                ali@boxcars.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-7">
                                    <div className="row">
                                        <div className="col-2">
                                            <img src={phoneIcon} alt=""/>
                                        </div>
                                        <div className="col-10 text-start">
                                            <span className="dm-sans-medium">Phone</span>
                                            <p className="ft-15">
                                                +76 956 123 456
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-7">
                                    <div className="row">
                                        <div className="col-10 text-start">
                                            <span className="dm-sans-medium">Follow us</span>
                                            <div className="row mt-2">
                                                <div className="col-3">
                                                    <a href="" className="text-black"><i className="bi bi-facebook"></i></a>
                                                </div>
                                                <div className="col-3">
                                                    <a href="" className="text-black"><i className="bi bi-twitter"></i></a>
                                                </div>
                                                <div className="col-3">
                                                    <a href="" className="text-black"><i className="bi bi-instagram"></i></a>
                                                </div>
                                                <div className="col-3">
                                                    <a href="" className="text-black"><i className="bi bi-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}