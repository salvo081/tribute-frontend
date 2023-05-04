import './Home.css';
import AllBlogs from '../components/AllBlogs';
import AllBoxes from '../components/AllBoxes';
import ScrollingText from '../components/ScrollingText';
import Hero from '../components/Hero';

function Home({ items }) {
  console.log('Home Items: ', items);

  return (
    <div className="Home-main">
      <Hero />
      <AllBoxes items={items} />
      <ScrollingText />
      <AllBlogs items={items} />
    </div>
  );
}

export default Home;
