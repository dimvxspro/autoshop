import { Outlet  } from 'react-router-dom';
import {HeaderDark} from "../Components/Header-dark-1";
import {Footer} from "../Components/Footer";
import {Login} from "../Components/Login";

export const LoginForm = () => (
    <>
        <Outlet/>
        <HeaderDark/>
        <Login/>
        <Footer/>
    </>

);