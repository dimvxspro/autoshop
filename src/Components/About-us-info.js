import React from 'react';
import img1 from '../assets/image/about-us-info/1-img.png';
import img2 from '../assets/image/about-us-info/2-img.png';

export function AboutUsInfo() {
    return(
        <section className="my-5">
            <div className="container">
                {/* --------------- text section  -------------*/}
                <div className="row">
                    <div className="col-12 col-md-5 text-start" data-aos="fade-up" data-aos-delay="200">
                        <h2 className="dm-sans-bold">
                            We Value Our Clients And
                            Want Them To Have A Nice
                            Experience
                        </h2>
                    </div>
                    <div className="col-12 offset-lg-1 col-md-6 ft-15 dm-sans-regular">
                        <div className="row justify-content-end d-flex" data-aos="fade-up" data-aos-delay="300">
                            <div className="col-12">
                                <p className="">
                                    Lorem ipsum dolor sit amet consectetur. Convallis integer enim eget sit urna. Eu duis lectus amet
                                    vestibulum varius. Nibh tellus sit sit at lorem facilisis. Nunc vulputate ac interdum aliquet
                                    vestibulum in tellus.
                                </p>
                                <p className="">
                                    Sit convallis rhoncus dolor purus amet orci urna. Lobortis vulputate vestibulum consectetur donec
                                    ipsum egestas velit laoreet justo. Eu dignissim egestas egestas ipsum. Sit est nunc pellentesque at
                                    a aliquam ultrices consequat. Velit duis velit nec amet eget eu morbi. Libero non diam sit viverra
                                    dignissim. Aliquam tincidunt in cursus euismod enim.
                                </p>
                                <p className="">
                                    Magna odio sed ornare ultrices. Id lectus mi amet sit at sit arcu mi nisl. Mauris egestas arcu mauris.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                {/* --------------- end text section  -------------*/}

                {/* --------------- image section  -------------*/}
                <div className="row gx-3 gy-3 mt-2 mt-md-5" data-aos="fade-up" data-aos-delay="400">
                    <div className="col-12 col-lg-7">
                        <img src={img1} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-12 col-lg-5">
                        <img src={img2} className="img-fluid w-100" alt=""/>
                    </div>
                </div>
                {/* --------------- end image section  -------------*/}
            </div>

        </section>
    )
}
