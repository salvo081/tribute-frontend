import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Home from './pages/Home';

import { useEffect, useState } from 'react';
// import { client } from './client';
import { Route, Routes } from 'react-router';
import { useLocation } from 'react-router-dom';
import Blog from './pages/Blog';
import ArticleDetail from './pages/ArticleDetail';
import Contact from './pages/Contact';
import About from './pages/About';
import axios from 'axios';

function App() {
  const [artists, setArtists] = useState([]); // Rename state variable
  const { pathname } = useLocation();

  useEffect(() => {
    async function fetchArtists() {
      // Define asynchronous function
      try {
        const response = await axios.get('http://localhost:8080/artists'); // Make GET request to localhost:8080/artists
        setArtists(response.data); // Set state with response data
      } catch (error) {
        console.error(error);
      }
    }

    fetchArtists(); // Call asynchronous function
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  console.log(artists);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home items={artists} />} />
          <Route path="blog" element={<Blog items={artists} />} />
          <Route path="blog/:id" element={<ArticleDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
      {/* Route */}

      {/* <AllBoxes />
      <ScrollingText />
      <AllBlogs /> */}
      {/* END Route */}

      <Footer />
    </div>
  );
}

export default App;
