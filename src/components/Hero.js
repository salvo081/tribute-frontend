import './Hero.css';
import heroImage from '../assets/bg-blog.jpeg';

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-wrapper">
        <img className="hero-img" src={heroImage} alt="dummy" />
        <div className="hero-text-wrapper">
          <h1>All Time Legends</h1>
          <p>The place where you can find your all time music legends.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
