import React, { useState } from "react";
import { Outlet } from 'react-router-dom';
import { CarsList2 } from "../Components/Cars-List-2";
import { HeaderDark } from "../Components/Header-dark-1";
import { Footer } from "../Components/Footer";

export const CarsList = () => {
    const [filter, setFilter] = useState('');

    const handleFilterChange = (event) => {
        const value = event.target.value;
        setFilter(value === '0' ? '' : value);
    };

    return (
        <>
            <HeaderDark />
            <section className="mt-5">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Listing v1</li>
                        </ol>
                    </nav>
                    <h1 className="dm-sans-bold" data-aos="fade-up" data-aos-delay="200">Listing v1</h1>
                    <div className="row align-items-center">
                        <div className="col-6" data-aos="fade-up" data-aos-delay="300">
                            <p className="dm-sans-medium ft-15">Showing results</p>
                        </div>
                        <div className="col-6">
                            <div className="row align-items-center" data-aos="fade-up" data-aos-delay="200">
                                <div className="col-7">
                                    <p className="dm-sans-regular ft-15 text-end text-secondary">Sort by</p>
                                </div>
                                <div className="col-5 ">
                                    <select className="form-select form-select-lg mb-3 dm-sans-regular ft-15" aria-label="Large select example" onChange={handleFilterChange}>
                                        <option value="0">Default</option>
                                        <option value="Petrol">Petrol</option>
                                        <option value="Diesel">Diesel</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 my-5">
                            <CarsList2 limit={12} filter={filter} />
                        </div>
                    </div>
                    <div className="row d-flex justify-content-end text-center">
                        <div className="col-12">

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Outlet />
        </>
    );
};
