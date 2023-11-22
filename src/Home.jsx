import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {
  const {data : blogs , isPending , error} = useFetch("http://localhost:8000/blogs");

//- npm run build => dist

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div id="load">
  <div>G</div>
  <div>N</div>
  <div>I</div>
  <div>D</div>
  <div>A</div>
  <div>O</div>
  <div>L</div>
  </div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
    </div>
  );
};

export default Home;
