import { Outlet  } from 'react-router-dom';
import {HeaderDark} from "../Components/Header-dark-1";
import {Footer} from "../Components/Footer";
import {FAQGeneral} from "../Components/FAQ-General";
import {FAQPayments} from "../Components/FAQ-Payments";

export const Questions = () => (
    <>
        <HeaderDark/>
        <FAQGeneral/>
        <FAQPayments/>
        <Outlet/>
        <Footer/>
    </>

);