import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './LogoMarquee.css';

const BlockWidth = 1440 / 6;

const ProccessBlocks = ({ images }) => {
  const [marqueeBlocks, setMarqueeBlocks] = useState([]);

  useEffect(() => {
    const _marqueeBlocks = [];
    let block = [];
    while (_marqueeBlocks.length < 7) {
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
    return null;
  }

  return <Marquee marqueeBlocks={marqueeBlocks} />;
};

const Marquee = ({ marqueeBlocks }) => {
  const marqueeElements = useRef([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const marqueeTween = useRef();

  const BannerWidth = BlockWidth * marqueeBlocks.length;

  useEffect(() => {
    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
      // marqueeTween.pause().kill();
    };
  }, []);

  useEffect(() => {
    marqueeInitialSet();
    marqueeTween.current && marqueeTween.current.pause().kill();
    marqueeTween.current = gsap.to(marqueeElements.current, {
      x: `-=${BannerWidth}`,
      ease: 'none',
      repeat: -1,
      duration: 20,
      rotation: 0.1,
      modifiers: {
        x: (x) => {
          return (
            ((parseFloat(x) + BlockWidth * (marqueeBlocks.length - 1)) %
              BannerWidth) +
            'px'
          );
        },
      },
    });
  }, [screenWidth]);

  const marqueeInitialSet = () => {
    gsap.set(marqueeElements.current, {
      // xPercent: -100,
      x: function (index) {
        return BlockWidth * index;
      },
    });
  };

  const resizeHandler = () => {
    gsap.set(marqueeElements.current, { clearProps: 'all' });
    setScreenWidth(window.innerWidth);
  };

  const marqueeElementsRefHandler = (e, i) => {
    marqueeElements.current[i] = e;
  };

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
        marqueeTween.current.pause();
      }}
      onMouseLeave={() => {
        marqueeTween.current.resume();
      }}>
      <div className="boxes">{renderMarqueeElements()}</div>
    </div>
  );
};

export default ProccessBlocks;
