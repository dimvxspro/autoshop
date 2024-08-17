import React from "react";
import calendarIcon from '../assets/image/car-info/calendar-icon.svg';
import mileageIcon from '../assets/image/car-info/mileage-icon.svg';
import petrolIcon from '../assets/image/car-info/petrol-icon.svg';
import typeIcon from '../../src/assets/image/car-info/type-icon.svg';

import shareIcon from '../assets/image/car-info/share-icon.svg';
import saveIcon from '../assets/image/car-info/save-icon.svg';
import compareIcon from '../assets/image/car-info/compare-icon.svg';
import {disableValidation} from "schema-utils";

import bodyIcon from '../assets/image/car-info/body-icon.svg';
import mileageBlackIcon from '../assets/image/car-info/mileage-black-icon.svg';
import petrolBlackIcon from '../assets/image/car-info/petrol-black-icon.svg';
import yearIcon from '../assets/image/car-info/year-icon.svg';
import transmissionIcon from '../assets/image/car-info/transmission-icon.svg';
import driveTypeIcon from '../assets/image/car-info/drive-type-icon.svg';
import conditionIcon from '../assets/image/car-info/condition-icon.svg';
import engineIcon from '../assets/image/car-info/engine-size-icon.svg';
import doorIcon from '../assets/image/car-info/door-icon.svg';
import cylinderIcon from '../assets/image/car-info/cylinder-icon.svg';
import colorIcon from '../assets/image/car-info/color-icon.svg';
import vinIcon from '../assets/image/car-info/vin-icon.svg';
import phoneIcon from '../assets/image/car-info/phone-icon.svg';
import offerIcon from '../assets/image/car-info/offer-icon.svg';
import getDirectionIcon from '../assets/image/car-info/get-direction-icon.svg';
import adminPhoto from '../assets/image/car-info/admin-photo.png';

import slider1Img from '../assets/image/car-info/slider-img/1.png';
import {Map} from "./map";
import {FinancingCalc} from "./Financing-calc";

export function CarInfo() {
    return(
        <section className="mt-5">
            <div className="container py-0 py-md-5">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Listings</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Ranger Black – 2021</li>
                    </ol>
                </nav>
                <h2 className="dm-sans-bold" data-aos="fade-up" data-aos-delay="200">Ranger Black – 2021</h2>
                <p className="ft-15" data-aos="fade-up" data-aos-delay="200">2.0 D5 PowerPulse Momentum 5dr AWD Geartronic Estate</p>

                <div className="row">
                    <div className="col-12 col-md-8 col-lg-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="row gy-2 gx-1">
                            <div className="col-6 col-md-3">
                                <div className="blue-color border-40 bg-light-blue py-2 px-2 text-center ft-15"><img src={calendarIcon} alt=""/> 2021</div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="blue-color border-40 bg-light-blue py-2 px-2 text-center ft-15"><img src={mileageIcon} alt=""/> 250 miles</div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="blue-color border-40 bg-light-blue py-2 px-2 text-center ft-15"><img src={typeIcon} alt=""/> Manual</div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="blue-color border-40 bg-light-blue py-2 px-2 text-center ft-15"><img src={petrolIcon} alt=""/> Petrol</div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-md-4 col-lg-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="row gy-2 gx-1 d-flex justify-content-end mt-2 mt-md-0">
                            <div className="col-4 col-md-4 col-lg-3">
                                <div className=" text-center ft-15">Share <button className="btn border-btn rounded-5"><img src={shareIcon} className="align-self-auto" alt=""/></button></div>
                            </div>
                            <div className="col-4 col-md-4 col-lg-3">
                                <div className=" text-center ft-15">Save <button className="btn border-btn rounded-5"><img src={saveIcon} className="align-self-auto" alt=""/></button></div>
                            </div>
                            <div className="col-4 col-md-4 col-lg-3">
                                <div className=" text-center ft-15">Compare <button className="btn border-btn rounded-5"><img src={compareIcon} className="align-self-auto" alt=""/></button></div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row pt-3">
                    <div className="col-12 col-lg-8" data-aos="fade-up" data-aos-delay="400">
                        <div>
                            <img src={slider1Img} className="img-fluid border-16" alt=""/>
                        </div>

                         <div className="row">
                             <div className="col-12 fw-bold ft-26">
                                 Car Overview
                             </div>

                         </div>

                        <div className="row pt-4 pb-4" data-aos="fade-up" data-aos-delay="500">
                            <div className="col-lg-3 col-6 fw-bold pb-3"><img src={bodyIcon} alt=""/> Body:</div>
                            <div className="col-lg-3 col-6"> Sedan</div>
                            <div className="col-lg-3 col-6 fw-bold pb-3"><img src={conditionIcon} alt=""/> Condition:</div>
                            <div className="col-lg-3 col-6"> Used</div>


                            <div className="col-lg-3 col-6 fw-bold pb-3"><img src={mileageBlackIcon} alt=""/> Mileage:</div>
                            <div className="col-lg-3 col-6"> 250</div>
                            <div className="col-lg-3 col-6 fw-bold pb-3"><img src={engineIcon} alt=""/> Engine Size:</div>
                            <div className="col-lg-3 col-6"> 4.0</div>

                            <div className="col-lg-3 col-6 fw-bold pb-3"><img src={petrolBlackIcon} alt=""/> Fuel Type:</div>
                            <div className="col-lg-3 col-6"> Petrol</div>
                            <div className="col-lg-3 col-6 fw-bold pb-3"><img src={doorIcon} alt=""/> Door:</div>
                            <div className="col-lg-3 col-6"> 4 Doors</div>

                            <div className="col-lg-3 col-6 fw-bold pb-3"><img src={yearIcon} alt=""/> Year:</div>
                            <div className="col-lg-3 col-6"> 2021</div>
                            <div className="col-lg-3 col-6 fw-bold pb-3"><img src={cylinderIcon} alt=""/> Cylinder:</div>
                            <div className="col-lg-3 col-6"> 12</div>

                            <div className="col-lg-3 col-6 fw-bold pb-3"><img src={transmissionIcon} alt=""/> Transmission:</div>
                            <div className="col-lg-3 col-6"> Manual</div>
                            <div className="col-lg-3 col-6 fw-bold pb-3"><img src={colorIcon} alt=""/> Color:</div>
                            <div className="col-lg-3 col-6"> Black</div>

                            <div className="col-lg-3 col-6 fw-bold pb-3"><img src={driveTypeIcon} alt=""/> Drive Type:</div>
                            <div className="col-lg-3 col-6"> Rear-Wheel Drive</div>
                            <div className="col-lg-3 col-6 fw-bold pb-3"><img src={vinIcon} alt=""/> VIN:</div>
                            <div className="col-lg-3 col-6"> FCB123792</div>
                        </div>
                        <hr/>

                        <div className="row pt-3 " data-aos="fade-up" data-aos-delay="600">
                            <div className="col-12 fw-bold ft-26 pb-2">
                                Description
                            </div>
                            <div className="pt-2">
                                <p>Quisque imperdiet dignissim enim dictum finibus. Sed consectetutr convallis enim eget laoreet. Aenean vitae nisl mollis, porta risus
                                    vel, dapibus lectus. Etiam ac suscipit eros, eget maximus</p>
                            </div>
                            <div>
                                Etiam sit amet ex pharetra, venenatis ante vehicula, gravida sapien. Fusce eleifend vulputate nibh, non cursus augue placerat
                                pellentesque. Sed venenatis risus nec felis mollis, in pharetra urna euismod. Morbi aliquam ut turpis sit amet ultrices. Vestibulum
                                mattis blandit nisl, et tristique elit scelerisque nec. Fusce eleifend laoreet dui eget aliquet. Ut rutrum risus et nunc pretium scelerisque.
                            </div>
                            <div>
                                <div className="d-grid gap-2 col-12 col-md-4 pt-3">
                                    <button className="btn btn-outline-dark h55" type="button"><img src={calendarIcon} alt=""/>  Car-Brochure.pdf</button>
                                </div>
                            </div>

                        </div>
                        <hr/>

                        <div className="row pt-3 " data-aos="fade-up" data-aos-delay="700">
                            <div className="col-12 fw-bold ft-26 pb-2">
                                Features
                            </div>

                            <div className="col-lg-3 col-6 fw-bold pb-3 ft-18"> Interior</div>
                            <div className="col-lg-3 col-6 fw-bold pb-3 ft-18"> Safety</div>
                            <div className="col-lg-3 col-6 fw-bold pb-3 ft-18 d-none d-lg-block"> Exterior</div>
                            <div className="col-lg-3 col-6 fw-bold pb-3 ft-18 d-none d-lg-block"> Comfort&Convenience</div>


                            <div className="col-lg-3 col-6 pb-3"> Air Conditioner </div>
                            <div className="col-lg-3 col-6"> Anti-lock Braking</div>
                            <div className="col-lg-3 col-6 pb-3"> Fog Lights Front  </div>
                            <div className="col-lg-3 col-6"> Android Auto </div>

                            <div className="col-lg-3 col-6 pb-3"> Digital Odometer</div>
                            <div className="col-lg-3 col-6"> Brake Assist</div>
                            <div className="col-lg-3 col-6 pb-3"> Rain Sensing Wiper</div>
                            <div className="col-lg-3 col-6"> Apple CarPlay</div>

                            <div className="col-lg-3 col-6 pb-3"> Heater</div>
                            <div className="col-lg-3 col-6"> Child Safety Locks</div>
                            <div className="col-lg-3 col-6 pb-3"> Rear Spoiler</div>
                            <div className="col-lg-3 col-6"> Bluetooth</div>

                            <div className="col-lg-3 col-6 pb-3"> Leather Seats</div>
                            <div className="col-lg-3 col-6"> Driver Air Bag</div>
                            <div className="col-lg-3 col-6 pb-3"> Windows - Electric</div>
                            <div className="col-lg-3 col-6"> HomeLink</div>

                            <div className="col-lg-3 col-6 pb-3"> Panoramic Moonroof</div>
                            <div className="col-lg-3 col-6"> Power Door Locks</div>
                            <div className="col-lg-3 col-6 pb-3"> </div>
                            <div className="col-lg-3 col-6">  Power Steering</div>

                            <div className="col-lg-3 col-6 pb-3"> Tachometer</div>
                            <div className="col-lg-3 col-6"> </div>
                            <div className="col-lg-3 col-6 pb-3"> </div>
                            <div className="col-lg-3 col-6"> </div>

                        </div>

                        <hr/>

                        <div className="row pt-4 pb-4" data-aos="fade-up" data-aos-delay="800">

                            <div className="col-12 fw-bold ft-26 pb-2">
                                Dimensions & Capacity
                            </div>

                            <div className="col-lg-4 col-6 fw-bold pb-3"> Length:</div>
                            <div className="col-lg-2 col-6"> 4950mm</div>
                            <div className="col-lg-4 col-6 fw-bold pb-3"> Width:</div>
                            <div className="col-lg-2 col-6"> 2140mm</div>


                            <div className="col-lg-4 col-6 fw-bold pb-3"> Height:</div>
                            <div className="col-lg-2 col-6"> 1776mm</div>
                            <div className="col-lg-4 col-6 fw-bold pb-3"> Width (including mirrors):</div>
                            <div className="col-lg-2 col-6"> 2240mm</div>

                            <div className="col-lg-4 col-6 fw-bold pb-3"> Wheelbase:</div>
                            <div className="col-lg-2 col-6"> 2984mm</div>
                            <div className="col-lg-4 col-6 fw-bold pb-3"> Gross Vehicle Weight (kg):</div>
                            <div className="col-lg-2 col-6"> 1550</div>

                            <div className="col-lg-4 col-6 fw-bold pb-3"> Height (including roof rails):</div>
                            <div className="col-lg-2 col-6"> 1876mm</div>
                            <div className="col-lg-4 col-6 fw-bold pb-3"> Max. Loading Weight (kg):</div>
                            <div className="col-lg-2 col-6"> 1200</div>

                            <div className="col-lg-4 col-6 fw-bold pb-3">Luggage Capacity (Seats Up - Litres):</div>
                            <div className="col-lg-2 col-6"> 450</div>
                            <div className="col-lg-4 col-6 fw-bold pb-3"> Max. Roof Load (kg):</div>
                            <div className="col-lg-2 col-6"> 350</div>

                            <div className="col-lg-4 col-6 fw-bold pb-3"> Luggage Capacity (Seats Down - Litres):</div>
                            <div className="col-lg-2 col-6">850</div>
                            <div className="col-lg-4 col-6 fw-bold pb-3"> No. of Seats:</div>
                            <div className="col-lg-2 col-6"> 5</div>
                        </div>
                        <hr/>


                        <div className="row pt-4 pb-4" data-aos="fade-up" data-aos-delay="900">

                            <div className="col-12 fw-bold ft-26 pb-2">
                                Engine and Transmission
                            </div>

                            <div className="col-lg-4 col-6 fw-bold pb-3"> Fuel Tank Capacity (Litres):</div>
                            <div className="col-lg-2 col-6"> 100</div>
                            <div className="col-lg-4 col-6 fw-bold pb-3"> Minimum Kerbweight (kg):</div>
                            <div className="col-lg-2 col-6"> 350</div>


                            <div className="col-lg-4 col-6 fw-bold pb-3"> Max. Towing Weight - Braked (kg):</div>
                            <div className="col-lg-2 col-6"> 800</div>
                            <div className="col-lg-4 col-6 fw-bold pb-3"> Turning Circle - Kerb to Kerb
                                (m):</div>
                            <div className="col-lg-2 col-6"> 4500</div>

                            <div className="col-lg-4 col-6 fw-bold pb-3"> Max. Towing Weight - Unbraked (kg):</div>
                            <div className="col-lg-2 col-6"> 1000</div>
                            <div className="col-lg-4 col-6 fw-bold pb-3"> </div>
                            <div className="col-lg-2 col-6"> </div>


                        </div>
                        <hr/>


                        <div className="row pt-4 pb-4" data-aos="fade-up" data-aos-delay="1000">

                            <div className="col-12 fw-bold ft-26 pb-2">
                                Location
                            </div>

                            <div className="col-12 pb-2">
                                990 Metropolitan Ave, Brooklyn
                            </div>
                          <Map/>
                        </div>
                        <hr/>
                        <FinancingCalc/>

                    </div>
                    <div className="col-12 col-lg-4 " data-aos="fade-up" data-aos-delay="2000">
                        <div className="pt-lg-0 pt-5">
                            <div className="border-btn1 border-16">
                                <div className="row m-3 pt-2 pb-2">
                                    <div className="col-12">
                                        <p className="m-0 pb-2">Our Price</p>
                                    </div>

                                    <div className="col-12 pb-2">
                                        <span className="ft-16 line-through">$180,000</span>  <span className="h3 dm-sans-bold">$165,000</span>
                                    </div>

                                    <div className="col-12 pb-2">
                                        <p>Instant Saving: $15,000</p>
                                    </div>

                                    <div className="d-grid gap-2 col-11 mx-auto pb-3">
                                        <button className="btn btn-primary h55 " type="button"><img src={offerIcon} alt=""/>   Make An Offer Price</button>
                                    </div>
                                    <div className="d-grid gap-2 col-11 mx-auto pb-3">
                                        <button className="btn btn-outline-dark h55" type="button"><img src={driveTypeIcon} alt=""/>   Schedule Test Drive</button>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="pt-4 pb-5" data-aos="fade-up" data-aos-delay="3000">
                            <div className="border-btn1 border-16 ">
                                <div className="row m-3 pt-2 pb-2">

                                    <div className="col-12">
                                        <img src={adminPhoto} alt=""/>
                                        <p className="m-0 ft-20 dm-sans-medium">admin</p>
                                    </div>

                                    <div className="col-12">
                                        <p className="">943 Broadway, Brooklyn</p>
                                    </div>

                                    <div className="row">
                                        <div className="col-6">
                                            <p className="ft-15"><img src={getDirectionIcon} alt=""/> Get Direction</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="ft-15"><img src={phoneIcon} alt=""/> +88123456789</p>
                                        </div>
                                    </div>

                                    <div className="d-grid gap-2 col-11 mx-auto pb-3">
                                        <button className="btn btn-primary h55 " type="button"> Message Dealer <i className="bi bi-arrow-up-right"></i></button>
                                    </div>
                                    <div className="d-grid gap-2 col-11 mx-auto pb-3">
                                        <button className="btn btn-outline-success h55" type="button"> Chat Via Whatsapp  <i className="bi bi-arrow-up-right"></i></button>
                                    </div>
                                    <div className="text-center">
                                        <a href="">View All stock at this dealer <i className="bi bi-arrow-up-right"></i></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    );
}