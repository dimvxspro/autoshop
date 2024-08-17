import React from "react";
import avatarImg from "../assets/image/car-blog-info/avatar.png";
import carImg from "../assets/image/car-blog-info/bentley.png";
import carImg1 from "../assets/image/car-blog-info/volvo.png";

export function BlogCarInfo() {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-auto">
                    <img src={avatarImg} className="avatar-img" alt="Admin Avatar"/>
                </div>
                <div className="col-auto">
                    <p className="dm-sans-regular ft-15">Admin</p>
                </div>
                <div className="col-auto">
                    <p className="dm-sans-regular ft-15">Accessories, Exterior</p>
                </div>
                <div className="col-auto">
                    <p className="dm-sans-regular ft-15">November 22, 2023</p>
                </div>
            </div>

            <div className="row py-5">
                <div className="col-12 text-center">
                    <img src={carImg} className="img-fluid" alt="BMW X6 M50i"/>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <p className="dm-sans-regular ft-15">
                        Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan
                        nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci
                        congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link
                        libero tempus congue.
                    </p>
                    <p className="dm-sans-regular ft-15">
                        Duis mattis laoreet neque, et ornare neque sollicitudin at.
                        Proin sagittis dolor sed mi elementum pretium. Donec et justo ante.
                        Vivamus egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque penatibus et magnis
                        dis parturient montes, nascetur
                        ridiculus mus. Integer tristique elit lobortis purus bibendum, quis dictum metus mattis.
                        Phasellus posuere felis sed eros porttitor
                        mattis. Curabitur massa magna, tempor in blandit id, porta in ligula. Aliquam laoreet nisl
                        massa, at interdum mauris sollicitudin et.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-12 blog-car-bg rounded-4 py-3">
                    <p className="py-4 dm-sans-regular blog-car-font px-5">
                        Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh
                        facilisis, at
                        malesuada orci congue.</p>
                    <p className="dm-sans-medium ft-17 px-5">Luis Pickford</p>
                    <div className="colored-bar"></div>
                </div>
                <p className="dm-sans-medium ft-26 py-2">What you’ll learn</p>

                <div className="row">
                    <div className="col-6">
                        <ul className="custom-list">
                            <li>Become a UI/UX designer.</li>
                            <li>You will be able to start earning money Figma skills.</li>
                            <li>Build a UI project from beginning to end.</li>
                            <li>Work with colors & fonts.</li>
                            <li>You will create your own UI Kit.</li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul className="custom-list">
                            <li>Build & test a complete mobile app.</li>
                            <li>Learn to design mobile apps & websites.</li>
                            <li>Design 3 different logos.</li>
                            <li>Create low-fidelity wireframe.</li>
                            <li>Downloadable exercise files.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row p-5">
                <img src={carImg1} className="img-fluid"/>
            </div>
            <p className="dm-sans-medium ft-26 px-3">Requirements</p>
            <div className="row">
                <div className="col-12">
                    <ul>
                        <li><p className="dm-sans-regular ft-15">We do not require any previous experience or
                            pre-defined skills to take this course. A great orientation would be enough to
                            master UI/UX design.</p></li>
                        <li><p className="dm-sans-regular ft-15">A computer with a good internet connection.</p></li>
                        <li><p className="dm-sans-regular ft-15">Adobe Photoshop (OPTIONAL)</p></li>
                    </ul>
                </div>
            </div>

            <div className="row align-items-center">
                <hr className="p-2"/>
                <div className="col-md-6 pt-4">
                    <div className="d-flex align-items-center">
                        <p className="dm-sans-medium ft-15 mb-0 me-3">Share this post</p>
                        <div className="d-flex">
                            <i className="bi bi-facebook me-3"></i>
                            <i className="bi bi-twitter me-3"></i>
                            <i className="bi bi-linkedin me-3"></i>
                            <i className="bi bi-pinterest me-3"></i>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 d-flex align-items-center pt-4">
                    <div className="col-5">
                        <p className="dm-sans-medium ft-13 little-blocks p-2">Exterior</p>
                    </div>
                    <div className="col-4">
                        <p className="dm-sans-medium ft-13 little-blocks p-2 text-center">Fuel System</p>
                    </div>
                    <div className="col-3">
                        <p className="dm-sans-medium ft-13 little-blocks p-2 text-center">Sound</p>
                    </div>
                </div>
                <hr className="p-3"/>
            </div>


        </div>
    );
}
