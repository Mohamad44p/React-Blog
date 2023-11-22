import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate(); 

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + id, { 
      method: 'DELETE' 
    })
    .then(() => {
      navigate('/'); 
    });
  };

  return ( 
    <div className="blog-details">
      {isPending && (
        <div id="load">
          <div>G</div>
          <div>N</div>
          <div>I</div>
          <div>D</div>
          <div>A</div>
          <div>O</div>
          <div>L</div>
        </div>
      )}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;
