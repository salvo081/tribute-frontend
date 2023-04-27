import './ScrollingText.css';
import Marquee from 'react-gsap-marquee';

export default function ScrollingText() {
  return (
    <>
      <div className="marquee-wrapper">
        <Marquee>
          <p className="marquee-text">ALL TIME LEGENDS</p>
        </Marquee>
      </div>
    </>
  );
}
