import React, { useState, useEffect } from 'react';
import blogData from '../data/blogData.json';
import { BlogCard } from './BlogCard';

export function BlogSlide({ limit }) {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        setBlogs(blogData.slice(0, 3));
    }, [limit]);

    return (
        <div className="container my-3">
            <div className="row gx-3 gy-3">
                <h2 className="dm-sans-bold">Related Posts</h2>
                {blogs.map(blog => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
        </div>


    );
}

