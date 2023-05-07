import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Home from './pages/Home';

import { useEffect, useState } from 'react';
import { client } from './client';
import { Route, Routes } from 'react-router';
import { useLocation } from 'react-router-dom';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';

function App() {
  const [contentfulData, setContentfulData] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    client
      .getEntries()
      .then((entries) => {
        // console.log(entries);
        setContentfulData(entries.items);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  console.log(contentfulData);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home items={contentfulData} />} />
          <Route path="articles" element={<Articles />} />
          <Route
            path="articles/:id"
            element={<ArticleDetail items={contentfulData} />}
          />
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
