import './Home.css';
import AllBlogs from '../components/AllBlogs';
import AllBoxes from '../components/AllBoxes';
import ScrollingText from '../components/ScrollingText';
import Hero from '../components/Hero';

function Home() {
  return (
    <div className="Home-main">
      <Hero />
      <AllBoxes />
      <ScrollingText />
      <AllBlogs />
    </div>
  );
}

export default Home;
