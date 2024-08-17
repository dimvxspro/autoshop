import React from 'react';
import { Link } from 'react-router-dom';

export function BlogCard({ blog }) {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <Link to="/blog-page">
            <div className="border-16 card border-0">
                <div className="position-relative">
                    <img src={blog.image} className="card-img-top border-16" alt="Car" />
                    <span className={`badge text-black position-absolute py-2 px-3 dm-sans-medium ft-15 border-30`} style={{ top: '15px', left: '10px', backgroundColor: blog["bg-color"] }}>{blog.badge}</span>
                </div>
                <div className="card-body bg-0 px-0">
                    <div className="row">
                        <div className="col-12">
                            <p className="dm-sans-regular ft-15 text-capitalize">{blog.owner}
                                <span className="dm-sans-regular ft-15 text-capitalize ms-3">{blog.date}</span>
                            </p>

                        </div>
                    </div>
                    <a href="">
                        <h5 className="card-title ft-18 mb-1 dm-sans-medium primary-color mt-0">{blog.title}</h5>
                    </a>

                </div>
            </div>
            </Link>
        </div>
    );
}
