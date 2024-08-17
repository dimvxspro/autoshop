import { Outlet  } from 'react-router-dom';
import {Footer} from "../Components/Footer";

export const Shop = () => (
    <>
        <p>Hello Shop!</p>
        <Outlet/>
        <Footer/>
    </>

);