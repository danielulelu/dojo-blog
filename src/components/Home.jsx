import BlogList from "../components/BlogList";
// import { useState, useEffect } from "react";
import useFetch from "../useFetch";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      { isPending && <div>{error}</div>}
      {isPending && <div style={{ color: 'green', textDecoration: 'underline'  }}>Give me a second</div>}
      {/* Conditional template in react */}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;

