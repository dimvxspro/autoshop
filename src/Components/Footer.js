import React from "react";
import appleLink from "../assets/image/footer/apple-link.svg";
import googleLink from "../assets/image/footer/google-link.svg";

export function Footer() {
    return (
        <div className="bg-primary1 p-3 p-md-0">
            <div className="container pt-5 pb-5">
                <div className="row my-3 pb-4 border-bottom">
                    <div className="col-12 col-lg-6 text-white">
                        <h3 className="">Join BoxCar</h3>
                        <p className="ft-15">Receive pricing updates, shopping tips & more!</p>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="row justify-content-end">
                            <div className="col-12 col-lg-9">
                                <div className="wrapper">
                                    <input type="text" placeholder="Your email address" />
                                    <button>
                                        <span className="dm-sans-medium ft-15">Sign Up</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row pt-5">
                    <div className="col-lg-3 col-sm-4 col-6 col white-2-color dm-sans-regular">
                        <h4 className="white-2-color pb-2">Company</h4>
                        <div className="ft-15">
                            <p>About Us</p>
                            <p>Blog</p>
                            <p>Services</p>
                            <p>FAQs</p>
                            <p>Terms</p>
                            <p>Contact Us</p>
                        </div>

                    </div>
                    <div className="col-lg-3 col-4 d-none d-sm-block white-2-color dm-sans-regular">
                        <h4 className="white-2-color pb-2">Our Brands</h4>
                        <div className="ft-15">
                            <p>Toyota</p>
                            <p>Porsche</p>
                            <p>Audi</p>
                            <p>BMW</p>
                            <p>Ford</p>
                            <p>Nissan</p>
                            <p>Peugeot</p>
                            <p>Volkswagen</p>
                        </div>

                    </div>
                    <div className="col-lg-3 col-4 d-none d-lg-block white-2-color dm-sans-regular">
                        <h4 className="pb-2">Vehicles Type</h4>
                        <div className="ft-15">
                            <p>Sedan</p>
                            <p>Hatchback</p>
                            <p>SUV</p>
                            <p>Hybrid</p>
                            <p>Electric</p>
                            <p>Coupe</p>
                            <p>Truck</p>
                            <p>Convertible</p>
                        </div>

                    </div>
                    <div className="col-lg-3 col-sm-4 col-6 white-2-color">
                        <h4 className=" pb-2">Our Mobile App</h4>
                        <a href="#"><p className="ft-15  dm-sans-regular"><img src={appleLink} className="img-fluid" alt=""/></p></a>
                        <a href="#"><p className="ft-15  dm-sans-regular"><img src={googleLink} className="img-fluid" alt=""/></p></a>
                        <h4 className=" pb-2">Connect With Us</h4>
                        <div className="row white-2-color">
                            <div className="col-3">
                                <i className="bi bi-facebook"></i>
                            </div>
                            <div className="col-3">
                                <i className="bi bi-twitter"></i>
                            </div>
                            <div className="col-3">
                                <i className="bi bi-instagram"></i>
                            </div>
                            <div className="col-3">
                                <i className="bi bi-linkedin"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12 col-lg-6 d-flex justify-content-lg-start justify-content-center">
                        <p className="ft-15 dm-sans-regular text-white text-center text-lg-start">© 2024 exemple.com. All rights reserved.</p>
                    </div>
                    <div className="col-12 col-lg-6 text-end ">
                        <div className="row justify-content-end">
                            <div className="col-lg-4 col-12 text-lg-end text-center">
                                <a href=""><p className="ft-15 dm-sans-regular text-white">Terms & Conditions</p></a>
                            </div>
                            <div className="col-lg-3 col-12 text-lg-end text-center">
                                <a href=""><p className="ft-15 dm-sans-regular text-white">Privacy Notice</p></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>





























    //
    //
    // <div className="container">
    //     <div className="row">
    //         <div className="col-6">
    //             <p className="text-start dm-sans-bold h2">Explore Our Premium Brands</p>
    //         </div>
    //
    //         <div className="col-6">
    //             <p className="text-end dm-sans-medium"><a className="text-end dm-sans-medium text-decoration-none text-black">Show All Brands <i className="bi bi-arrow-up-right"></i></a></p>
    //         </div>
    //     </div>
    //     <div className="row">
    //
    //         <div className="col-6 col-sm-4 col-lg-2 ">
    //             <div className=" border-16 brands-border-color">
    //                 <div className="row">
    //                     <div className="col-12 d-flex justify-content-center pt-3">
    //                         <img src={audiIcon}/>
    //                     </div>
    //                     <div className="col-12 d-flex justify-content-center pt-1 pb-1">
    //                         <p>Audi</p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //
    //
    //         <div className="col-6 col-sm-4 col-lg-2 ">
    //             <div className=" border-16 brands-border-color">
    //                 <div className="row">
    //                     <div className="col-12 d-flex justify-content-center pt-3">
    //                         <img src={mercedesIcon}/>
    //                     </div>
    //                     <div className="col-12 d-flex justify-content-center pt-1 pb-1">
    //                         <p>Mercedes</p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="col-6 col-sm-4 col-lg-2 ">
    //             <div className=" border-16 brands-border-color">
    //                 <div className="row">
    //                     <div className="col-12 d-flex justify-content-center pt-3">
    //                         <img src={bmwIcon}/>
    //                     </div>
    //                     <div className="col-12 d-flex justify-content-center pt-1 pb-1">
    //                         <p>BMW</p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //
    //         <div className="col-6 col-sm-4 col-lg-2 ">
    //             <div className=" border-16 brands-border-color">
    //                 <div className="row">
    //                     <div className="col-12 d-flex justify-content-center pt-3">
    //                         <img src={vwIcon}/>
    //                     </div>
    //                     <div className="col-12 d-flex justify-content-center pt-1 pb-1">
    //                         <p>Volkswagen</p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //
    //
    //         <div className="col-6 col-sm-4 col-lg-2 ">
    //             <div className=" border-16 brands-border-color">
    //                 <div className="row">
    //                     <div className="col-12 d-flex justify-content-center pt-3">
    //                         <img src={fordIcon}/>
    //                     </div>
    //                     <div className="col-12 d-flex justify-content-center pt-1 pb-1">
    //                         <p>Ford</p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //
    //         <div className="col-6 col-sm-4 col-lg-2 ">
    //             <div className=" border-16 brands-border-color">
    //                 <div className="row">
    //                     <div className="col-12 d-flex justify-content-center pt-3">
    //                         <img src={peugeotIcon}/>
    //                     </div>
    //                     <div className="col-12 d-flex justify-content-center pt-1 pb-1">
    //                         <p>Peugeot</p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //
    //
    //     </div>
    // </div>

    );
}