import React from "react";
import adminImg from "../assets/image/car-blog-info/avatar.png";
import userImg from "../assets/image/car-blog-info/image.png";
import userImg1 from "../assets/image/car-blog-info/image1.png";

export function Comments(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-3">
                            <img src={adminImg} width="70px" className=""/>
                        </div>
                        <div className="col-9 p-0"><p>Admin</p>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam
                                rem
                                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                                dicta sunt
                                explicabo. Nemo enim
                                ipsam voluptatem quia voluptas sit.</p>
                        </div>
                        <hr/>

                    </div>
                </div>
            </div>

            <div className="row p-3">
                <div className="col-6 px-5">
                    <p className="dm-sans-medium pt-17 d-flex justify-content-start"><i
                        className="bi bi-chevron-left"></i> Previous Post</p>
                    <p className="dm-sans-regular ft-14 d-flex justify-content-start">BMW X5 Gold 2024 Sport Review:
                        Light on Sport</p>
                </div>

                <div className="col-6 px-5">
                    <p className="dm-sans-medium pt-17 d-flex justify-content-end"><i
                        className="bi bi-chevron-right"></i> Next Post</p>
                    <p className="dm-sans-regular ft-14 d-flex justify-content-end">2024 BMW ALPINA XB7 with exclusive
                        details</p>
                </div>
            </div>


            <div className="row align-items-center">
                <hr className="p-3"/>
                <p className="dm-sans-medium ft-26"> 3 Comments</p>
                <div className="col-md-6">
                    <div className="d-flex align-items-center">
                        <img src={adminImg} className=""/>
                        <p className="dm-sans-medium ft-18 mb-1 px-2">Admin</p>
                        <p className="dm-sans-regular ft-14 mb-0 px-3">November 22, 2023</p>

                    </div>
                </div>

                <div className="col-md-6 d-flex justify-content-end">
                    <p className="dm-sans-medium p-2 comment-color-text">Reply</p>
                </div>
                <p className="dm-sans-regular ft-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim
                    ad minim veniam.</p>


                <div className="col-md-6 py-4">
                    <div className="d-flex align-items-center">
                        <img src={userImg} className=""/>
                        <p className="dm-sans-medium ft-18 mb-1 px-2">Ali Tufan</p>
                        <p className="dm-sans-regular ft-14 mb-0 px-3">November 22, 2023</p>

                    </div>
                </div>

                <div className="col-md-6 d-flex justify-content-end">
                    <p className="dm-sans-medium p-2 comment-color-text">Reply</p>
                </div>
                <p className="dm-sans-regular ft-15">Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin
                    sagittis dolor sed mi elementum pretium. Donec et justo ante.
                    Vivamus egestas sodales est, eu rhoncus urna semper eu.</p>


                <div className="col-md-6 py-4">
                    <div className="d-flex align-items-center">
                        <img src={userImg1} className=""/>
                        <p className="dm-sans-medium ft-18 mb-1 px-2">Demo</p>
                        <p className="dm-sans-regular ft-14 mb-0 px-3">January 3, 2024</p>

                    </div>
                </div>

                <div className="col-md-6 d-flex justify-content-end">
                    <p className="dm-sans-medium p-2 comment-color-text">Reply</p>
                </div>
                <p className="dm-sans-regular ft-15">سي</p>

                <hr className="p-3"/>
            </div>

            <p className="dm-sans-medium ft-26">Leave a Comment</p>

            <div className="row">
                <div className="col-6">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control border-16" id="floatingInput2"/>
                        <label htmlFor="floatingInput2">Name</label>
                    </div>
                </div>


                <div className="col-6">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control border-16" id="floatingInput2"/>
                        <label htmlFor="floatingInput2">Email</label>
                    </div>
                </div>

                <div className="col-12">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control border-16" id="floatingInput2"/>
                        <label htmlFor="floatingInput2">Website</label>
                    </div>
                </div>
                <div className="col-12 p-3">
                    <input type="checkbox" className="form-check-input"/>
                    <label className="form-check-label dm-sans-regular ft-15">Save my name, email, and website in this
                        browser for the next time I comment.</label>
                </div>
            </div>

            <div className="col-12">
                <div className="form-floating mb-6">
                    <input type="text" className="form-control border-16 p-5" id="floatingInput2"/>
                    <label htmlFor="floatingInput2">Comment</label>
                </div>
            </div>

            <div className="col-12 p-3">
                <button className="btn py-2 calc-btn border-16">Submit Comment</button>
        </div>
</div>
)
    ;
}