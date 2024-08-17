import { Outlet  } from 'react-router-dom';
import {Price_Cards} from "../Components/price-cards";
import {HeaderDark} from "../Components/Header-dark-1";
import {Footer} from "../Components/Footer";

export const PriceCards = () => (
    <>
        <HeaderDark/>
        <Price_Cards/>
        <Footer/>
        <Outlet/>
    </>

);