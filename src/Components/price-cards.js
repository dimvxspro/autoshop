import React from "react";

export function Price_Cards(){
    return(
        <section className="my-5">
            <div className="container">
                <h2 className="dm-sans-bold text-center mb-5" data-aos="fade-up" data-aos-delay="200">Membership Plans</h2>
                <div className="row gx-3 gy-3">

                    <div className="col-12 col-md-6 col-xl-3" data-aos="fade-up" data-aos-delay="300">
                        <div className="price-cards-border-color border-16 py-3 px-4 price-card">
                            <p className="dm-sans-bold ft-38 mb-1">$29</p>
                            <p className="dm-sans-medium ft-20 mb-2">Basic plan</p>
                            <p className="dm-sans-regular ft-14">
                                Quis autem vel eum iure reprehenderit qui in ea voluptate velit.
                            </p>
                            <ul className="custom-list">
                                <li className="dm-sans-regular ft-15">50 Listings</li>
                                <li className="dm-sans-regular ft-15">120 Days Visibility</li>
                                <li className="dm-sans-regular ft-15">Highlighted in Search Results</li>
                                <li className="dm-sans-regular ft-15">3 Revisions</li>
                                <li className="dm-sans-regular ft-15">7 days Delivery Time</li>
                                <li className="dm-sans-regular ft-15">Products Support</li>
                            </ul>
                            <button className="btn w-100 text-capitalize border-16 blue-border-color text-center card-button px-5 py-3 blue-color">
                                add to card
                            </button>
                        </div>

                    </div>

                    <div className="col-12 col-md-6 col-xl-3 text-white">
                        <div className="price-cards-border-color border-16 bg-blue py-3 px-4" data-aos="fade-up" data-aos-delay="400">
                            <p className="dm-sans-bold ft-38 mb-1">$39</p>
                            <p className="dm-sans-medium ft-20 mb-2">Standard Plan</p>
                            <p className="dm-sans-regular ft-14">Quis autem vel eum iure reprehenderit
                                qui in ea voluptate velit.</p>
                            <ul className="custom-list-2">
                                <li className="dm-sans-regular ft-15">60 Listings</li>
                                <li className="dm-sans-regular ft-15">150 Days Visibility</li>
                                <li className="dm-sans-regular ft-15">Highlighted in Search Results</li>
                                <li className="dm-sans-regular ft-15">3 Revisions</li>
                                <li className="dm-sans-regular ft-15">7 days Delivery Time</li>
                                <li className="dm-sans-regular ft-15">Products Support</li>
                            </ul>
                            <button className="btn price-main-btn w-100 text-capitalize border-16 text-center px-5 py-3">
                                add to card
                            </button>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-xl-3">
                        <div className="price-cards-border-color border-16 py-3 px-4 price-card" data-aos="fade-up" data-aos-delay="500">
                            <p className="dm-sans-bold ft-38 mb-1">$89</p>
                            <p className="dm-sans-medium ft-20 mb-2">Extended Plan</p>
                            <p className="dm-sans-regular ft-14">Quis autem vel eum iure reprehenderit
                                qui in ea voluptate velit.</p>
                            <ul className="custom-list">
                                <li className="dm-sans-regular ft-15">80 Listings</li>
                                <li className="dm-sans-regular ft-15">200 Days Visibility</li>
                                <li className="dm-sans-regular ft-15">Highlighted in Search Results</li>
                                <li className="dm-sans-regular ft-15">3 Revisions</li>
                                <li className="dm-sans-regular ft-15">7 days Delivery Time</li>
                                <li className="dm-sans-regular ft-15">Products Support</li>
                            </ul>
                            <button className="btn w-100 text-capitalize border-16 blue-border-color text-center card-button px-5 py-3 blue-color">
                                add to card
                            </button>
                        </div>

                    </div>

                    <div className="col-12 col-md-6 col-xl-3">
                        <div className="price-cards-border-color border-16 py-3 px-4 price-card" data-aos="fade-up" data-aos-delay="600">
                            <p className="dm-sans-bold ft-38 mb-1">$129</p>
                            <p className="dm-sans-medium ft-20 mb-2">Enterprise Plan</p>
                            <p className="dm-sans-regular ft-14">
                                Quis autem vel eum iure reprehenderit qui in ea voluptate velit.
                            </p>
                            <ul className="custom-list">
                                <li className="dm-sans-regular ft-15">100 Listings</li>
                                <li className="dm-sans-regular ft-15">365 Days Visibility</li>
                                <li className="dm-sans-regular ft-15">Highlighted in Search Results</li>
                                <li className="dm-sans-regular ft-15">3 Revisions</li>
                                <li className="dm-sans-regular ft-15">7 days Delivery Time</li>
                                <li className="dm-sans-regular ft-15">Products Support</li>
                            </ul>
                            <button className="btn w-100 text-capitalize border-16 blue-border-color text-center card-button px-5 py-3 blue-color">
                                add to card
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    );
}