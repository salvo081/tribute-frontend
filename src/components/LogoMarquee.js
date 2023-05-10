import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap'; // Import the GSAP library
import './LogoMarquee.css';

const BlockWidth = 1440 / 7; // Width of each logo block

// Component that processes the image array and creates marquee blocks
const ProccessBlocks = ({ images }) => {
  const [marqueeBlocks, setMarqueeBlocks] = useState([]);

  useEffect(() => {
    const _marqueeBlocks = [];
    let block = [];
    while (_marqueeBlocks.length < 7) {
      // We want 7 blocks of logos
      for (let i = 0; i < images.length; i++) {
        block.push(images[i]);
        if (block.length === 1) {
          _marqueeBlocks.push(block);
          block = [];
        }
      }
    }
    setMarqueeBlocks(_marqueeBlocks);
  }, [images]);

  if (marqueeBlocks.length === 0) {
    // If there are no blocks, don't render the marquee
    return null;
  }

  return <Marquee marqueeBlocks={marqueeBlocks} />;
};

// Component that creates the marquee animation
const Marquee = ({ marqueeBlocks }) => {
  const marqueeElements = useRef([]); // Reference to the DOM elements
  const [screenWidth, setScreenWidth] = useState(window.innerWidth); // State to keep track of the screen width
  const marqueeTween = useRef(); // Reference to the animation

  const BannerWidth = BlockWidth * marqueeBlocks.length; // Width of the entire banner

  useEffect(() => {
    resizeHandler(); // Call resizeHandler to set the initial size
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
      // marqueeTween.pause().kill();
    };
  }, []);

  useEffect(() => {
    marqueeInitialSet(); // Call the function to initialize the positions of the logos
    marqueeTween.current && marqueeTween.current.pause().kill(); // Pause and kill any existing animation
    marqueeTween.current = gsap.to(marqueeElements.current, {
      // Create the animation with GSAP
      x: `-=${BannerWidth}`, // Move the logos to the left
      ease: 'none',
      repeat: -1, // Repeat the animation infinitely
      duration: 20, // Duration of each loop
      rotation: 0.1, // Add a slight rotation effect to the logos
      modifiers: {
        x: (x) => {
          // Modify the x position of each logo
          return (
            ((parseFloat(x) + BlockWidth * (marqueeBlocks.length - 1)) % // Calculate the new x position
              BannerWidth) +
            'px'
          );
        },
      },
    });
  }, [screenWidth]);

  const marqueeInitialSet = () => {
    gsap.set(marqueeElements.current, {
      // Set the initial position of each logo
      // xPercent: -100,
      x: function (index) {
        return BlockWidth * index;
      },
    });
  };

  const resizeHandler = () => {
    gsap.set(marqueeElements.current, { clearProps: 'all' }); // Clear any existing properties
    setScreenWidth(window.innerWidth); // Update the screen width state
  };

  const marqueeElementsRefHandler = (e, i) => {
    // Callback function to save the references to the logos
    marqueeElements.current[i] = e;
  };

  // This function maps over the marqueeBlocks array and returns an array of JSX elements
  const renderMarqueeElements = () => {
    return marqueeBlocks.map((e, i) => (
      <div
        className="box"
        key={`marquee-${i}`}
        ref={(el) => marqueeElementsRefHandler(el, i)}>
        <div className="img">
          <img className="img1" alt="" src={e[0]} />
        </div>
      </div>
    ));
  };

  return (
    <div
      className="logo-marquee-wrapper"
      onMouseEnter={() => {
        // Pause the animation when the user hovers over the marquee
        marqueeTween.current.pause();
      }}
      onMouseLeave={() => {
        // Resume the animation when the user stops hovering over the marquee
        marqueeTween.current.resume();
      }}>
      <div className="boxes">{renderMarqueeElements()}</div>
    </div>
  );
};

export default ProccessBlocks;
