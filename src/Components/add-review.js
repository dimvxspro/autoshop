import React from "react";
import userImg from "../assets/image/car-blog-info/image.png";

export function AddReview() {
    return (
        <div className="container">
            <p className="dm-sans-medium ft-26">Add a review</p>
            <div className="row">
                <div className="col-6">
                    <div className="review-item d-flex justify-content-between">
                        <p className="dm-sans-regular ft-15 mb-1 px-3">Comfort</p>
                        <div>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                        </div>
                    </div>
                    <div className="review-item d-flex justify-content-between">
                        <p className="dm-sans-regular ft-15 mb-1 px-3">Exterior Styling</p>
                        <div>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                        </div>
                    </div>
                    <div className="review-item d-flex justify-content-between">
                        <p className="dm-sans-regular ft-15 mb-1 px-3">Performance</p>
                        <div>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="review-item d-flex justify-content-between">
                        <p className="dm-sans-regular ft-15 mb-1 px-3">Interior Design</p>
                        <div>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                        </div>
                    </div>
                    <div className="review-item d-flex justify-content-between">
                        <p className="dm-sans-regular ft-15 mb-1 px-3">Value For The Money</p>
                        <div>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                        </div>
                    </div>
                    <div className="review-item d-flex justify-content-between">
                        <p className="dm-sans-regular ft-15 mb-1 px-3">Reliability</p>
                        <div>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                        </div>
                    </div>
                </div>
            </div>

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

                <div className="col-12 p-3">
                    <input type="checkbox" className="form-check-input"/>
                    <label className="form-check-label dm-sans-regular ft-15">Save my name, email, and website in this
                        browser for the next time I comment.</label>
                </div>
            </div>

            <div className="col-12">
                <div className="form-floating mb-6">
                    <input type="text" className="form-control border-16 p-5" id="floatingInput2"/>
                    <label htmlFor="floatingInput2">Review</label>
                </div>
            </div>

            <div className="col-12 p-3">
                <button className="btn py-2 calc-btn border-16">Submit Review</button>
            </div>
        </div>
    );
}
