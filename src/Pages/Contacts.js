import { Outlet  } from 'react-router-dom';
import {HeaderDark} from "../Components/Header-dark-1";
import {Footer} from "../Components/Footer";
import React from "react";
import {Map} from "../Components/map";
import {GetInTouch} from "../Components/Get-In-Touch";
import {UsInfo} from "../Components/us-info";

export const Contacts = () => (
    <>
        <HeaderDark/>
        <section className="mt-5">
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                    </ol>
                </nav>
                <h1 className="dm-sans-bold">Contact Us</h1>

            </div>
        </section>
        <Map/>

        <GetInTouch/>
        <UsInfo/>
        <Footer/>
        <Outlet/>
    </>

);