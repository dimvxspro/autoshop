import React, { useState, useEffect } from 'react';
import blogData from '../data/blogData.json';
import { BlogCard } from './BlogCard';

export function BlogList({ limit }) {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        setBlogs(blogData.slice(0, 9));
    }, [limit]);

    return (

        <div className="row gx-3 gy-3">
            {blogs.map(blog => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
        </div>

    );
}

