import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AllBlogs from '../components/AllBlogs';
import './Articles.css';

export default function Articles() {
  return (
    <>
      <Navbar />
      <div className="artist-heading">
        <h1 className="blog-title">Blog Titel Artist Detail</h1>
        <img src="https://picsum.photos/200/300" alt="Artist Name" />
      </div>

      <main>
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
      </main>

      <Footer />
    </>
  );
}
