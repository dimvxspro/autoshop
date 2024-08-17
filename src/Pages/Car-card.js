import { Outlet  } from 'react-router-dom';
import {HeaderDark} from "../Components/Header-dark-1";
import {Footer} from "../Components/Footer";
import {CarInfo} from "../Components/Card-info";
import React from "react";
import {AddReview} from "../Components/add-review";

export const CarCard = () => (
    <>
        <HeaderDark/>
        <CarInfo/>
        <AddReview/>
        <Footer/>
        <Outlet/>
    </>

);