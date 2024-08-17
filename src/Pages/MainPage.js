import { Outlet  } from 'react-router-dom';
import {CarsList} from "../Components/Cars-list-1";
import {Brands} from "../Components/Brands";
import {Team} from "../Components/Team";
import {Application} from "../Components/Application";
import {SingleImg1} from "../Components/single-img-1";
import {Benefits1} from "../Components/benefits-1";
import {HeaderDark} from "../Components/Header-dark-1";
import {Footer} from "../Components/Footer";
import {Rating} from "../Components/Customer-rating";
import {BlogList1} from "../Components/Blog-1";
import {SingleImg2} from "../Components/Single-img-2";
import React from "react";
import CarouselVideoExample from "../Components/video-slider";

export const MainPage = () => (
    <>
        <HeaderDark/>
        <CarouselVideoExample/>
        <Brands/>
        <CarsList/>
        <SingleImg1/>
        <Benefits1/>
        <Rating/>
        <Team/>
        <Application/>
        <Outlet/>
        <BlogList1/>
        <SingleImg2/>
        <Footer/>
    </>
);



