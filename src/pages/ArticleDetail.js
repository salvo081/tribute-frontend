import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ArticleDetail.css';

export default function ArticleDetail() {
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
            <div className="sidebar-heading">
              <h3>Artist Information</h3>
            </div>
            <div className="sidebar-artist-info"></div>
          </aside>
        </div>
        <div className="content-container">
          <div className="blog-heading"></div>
          <div className="artist-bio">
            <div className="heading-bio">
              <h3>Artist Bio</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                perferendis voluptatibus nemo ipsum nam, veniam voluptatem culpa
                pariatur corporis laudantium qui molestiae facere sapiente,
                eaque temporibus aspernatur aut neque repellendus!
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
