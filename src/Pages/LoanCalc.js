import { Outlet  } from 'react-router-dom';
import {HeaderDark} from "../Components/Header-dark-1";
import {Calculator} from "../Components/Calculator";
import {Footer} from "../Components/Footer";
export const LoanCalc = () => (
    <>
        <HeaderDark/>
        <Calculator/>
        <Footer/>
        <Outlet/>
    </>

);