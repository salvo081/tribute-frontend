import React from 'react';
import './About.css';

export default function About() {
  const name = 'Tribute';

  return (
    <div className="about-container">
      <h1>Welcome to {name}!</h1>
      <br />
      <p className="about-description">
        We are a passionate community of music lovers who are dedicated to
        celebrating the greatest music artists of all time. Our mission is to
        provide you with an informative and entertaining platform where you can
        learn more about the musicians who have shaped the music industry and
        influenced generations.
      </p>
      <p className="about-description">
        At {name}, we are committed to providing you with accurate and
        up-to-date information on the lives and careers of the most legendary
        music artists of all time. Whether you are a long-time fan or just
        discovering their music, our website is the perfect destination to
        explore their discographies, biographies, and fun facts.
      </p>
      <p className="about-description">
        Our team of writers and researchers are all passionate music fans, with
        extensive knowledge of music history and the artists who have made it
        great. We aim to provide a comprehensive and engaging reading experience
        for our readers, and are always striving to improve our content to keep
        you entertained and informed.
      </p>
      <p className="about-description">
        We believe that music is a universal language that connects people from
        all walks of life, and we are proud to be part of a community that
        shares this passion. Whether you are a fan of classic rock, pop, jazz,
        or any other genre, we hope you will find something that speaks to your
        musical tastes on our website.
      </p>
      <p className="about-thankyou">
        Thank you for visiting {name}, and we hope you enjoy exploring the
        greatest music artists of all time with us!
      </p>
    </div>
  );
}
