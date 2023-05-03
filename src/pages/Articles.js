import AllBlogs from '../components/AllBlogs';
import './Articles.css';

export default function Articles() {
  return (
    <>
      <div className="artist-heading">
        <h1 className="blog-title">Blog Titel Artist</h1>
        <img src="https://picsum.photos/200/300" alt="Artist Name" />
      </div>

      <div className="Articles-main">
        <div className="sidebar-container">
          <aside>
            <div className="sidebar-heading"></div>
            <div className="sidebar-filter"></div>
          </aside>
        </div>
        <div className="content-container">
          <div className="blog-heading"></div>
          <AllBlogs />
        </div>
      </div>
    </>
  );
}
