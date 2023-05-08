import './Home.css';
import AllBlogs from '../components/AllBlogs';
import AllBoxes from '../components/AllBoxes';
import ScrollingText from '../components/ScrollingText';
import Hero from '../components/Hero';
import Marquee from '../components/LogoMarquee';
import logo1 from '../assets/band-logos/logo-2pac.png';
import logo2 from '../assets/band-logos/logo-amy-winehouse.png';
import logo3 from '../assets/band-logos/logo-elvis presley.png';
import logo4 from '../assets/band-logos/logo-janis-joplin.png';
import logo5 from '../assets/band-logos/logo-linkin-park.png';
import logo6 from '../assets/band-logos/logo-queen.png';
import { Link, NavLink } from 'react-router-dom';

const images = [logo1, logo2, logo3, logo4, logo5, logo6];

function Home({ items }) {
  console.log('Home Items: ', items);

  return (
    <div className="Home-main">
      <Hero />
      <AllBoxes items={items} />
      <ScrollingText />
      <AllBlogs items={items} />
      <div className="all-articles">
        <NavLink to="./blog">
          <button>Show All Articles</button>
        </NavLink>
      </div>
      <Marquee images={images} />
    </div>
  );
}

export default Home;
