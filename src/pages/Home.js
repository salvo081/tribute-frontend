import './Home.css';
import AllBlogs from '../components/AllBlogs';
import AllBoxes from '../components/AllBoxes';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ScrollingText from '../components/ScrollingText';
import Hero from '../components/Hero';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <Navbar />
        <Hero />
      </header>
      <main className="Home-main">
        <AllBoxes />
        <ScrollingText />
        <AllBlogs />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
