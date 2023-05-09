import AllBlogs from '../components/AllBlogs';
import './Blog.css';

export default function Blog({ items }) {
  console.log('BlogNeu Items: ', items);
  return (
    <>
      <div className="artist-heading">
        <h1 className="blog-title">All Articles</h1>
      </div>

      <div className="blog-heading"></div>
      <AllBlogs items={items} />
    </>
  );
}
