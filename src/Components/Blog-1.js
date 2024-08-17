import React, { useState, useEffect } from 'react';
import blogData from '../data/blogData.json';
import { BlogCard } from './BlogCard';
import { Link } from 'react-router-dom';

export function BlogList1({ limit }) {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        setBlog(blogData.slice(0, 3));
    }, [limit]);

    return (
        <div className="section py-3">
            <div className="container my-5">
                <div className="row pt-3" data-aos="fade-up" data-aos-delay="200">

                    <div className="col-sm-8 col-12 text-sm-start text-center" >
                        <h2 className="primary-color dm-sans-bold text-h2">Latest Blog Posts</h2>
                    </div>
                    <div className="col-sm-4 col-12 pt-sm-0 pt-3 pb-sm-0 pb-4 text-sm-end text-center">
                        <a href=""><Link to="/blog"><p className="ft-18 primary-color dm-sans-medium mb-0 view-all">View All <i className="bi bi-arrow-up-right"></i></p></Link></a>
                    </div>
                </div>
                <div className="row">

                    <div className="col-12 mt-5">
                        <div className="row gx-3 gy-3" data-aos="fade-up" data-aos-delay="300">
                            {blog.map(blog => (
                                <BlogCard key={blog.id} blog={blog} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

