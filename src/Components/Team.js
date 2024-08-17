import React from "react";
import worker1 from '../assets/image/team2/worker1.png';
import worker2 from '../assets/image/team2/worker2.png';
import worker3 from '../assets/image/team2/worker3.png';
import worker4 from '../assets/image/team2/worker4.png';

export function Team() {
    return (
        <div className="container my-5">
            <div className="row">

                <div className="col-sm-8 col-12 text-sm-start text-center" data-aos="fade-up" data-aos-delay="200">
                    <h2 className="primary-color dm-sans-bold text-h2">Our Team</h2>
                </div>
                <div className="col-sm-4 col-12 pt-sm-0 pt-3 pb-sm-0 pb-4 text-sm-end text-center">
                    <a href=""><p className="ft-18 primary-color dm-sans-medium mb-0 view-all">View All <i className="bi bi-arrow-up-right"></i></p></a>
                </div>
            </div>


            <div className="row">


                <div className="col-6 col-lg-3 " data-aos="fade-up" data-aos-delay="300">
                    <img src={worker1} alt="worker1" className="img-fluid"/>
                    <p className="dm-sans-medium ft-20 mb-0">Courtney Henry</p>
                    <p className="dm-sans-regular ft-14">Development Manager</p>
                </div>


                <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
                    <img src={worker2} alt="worker2" className="img-fluid"/>
                    <p className="dm-sans-medium ft-20 mb-0">Jerome Bell</p>
                    <p className="dm-sans-regular ft-14">Software Tester</p>
                </div>


                <div className="col-6 col-lg-3 " data-aos="fade-up" data-aos-delay="500">
                    <img src={worker3} alt="worker3" className="img-fluid"/>
                    <p className="dm-sans-medium ft-20 mb-0">Arlene McCoy</p>
                    <p className="dm-sans-regular ft-14">Software Developer</p>
                </div>


                <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="600">
                    <img src={worker4} alt="worker4" className="img-fluid"/>
                    <p className="dm-sans-medium ft-20 mb-0">Jenny Wilson</p>
                    <p className="dm-sans-regular ft-14">UI/UX Designer</p>
                </div>
            </div>
        </div>
    );
}