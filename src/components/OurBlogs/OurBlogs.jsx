import React from 'react';
import { BlogCard } from './BlogCard';
import { Button } from '../../components/Button/Button';

export const OurBlogs = () => {
  return (
    <section className="bg-[#0b1d27] text-white pt-36  flex flex-col justify-center items-center">
      <h3 className="text-3xl font-semibold mb-1">Our Blogs</h3>
      <h1 className="text-5xl text-cyan font-semibold mb-1 text-center">
        Read Amazing Stories
      </h1>
      <p className="mb-8 text-center">
        The biggest adventure you can ever take is to live the life of your
        dreams
      </p>
      <BlogCard />
      <Button>View All</Button>
    </section>
  );
};
