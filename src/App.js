import './App.css';
import AllBlogs from './components/AllBlogs';
import AllBoxes from './components/AllBoxes';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollingText from './components/ScrollingText';
import Hero from './components/Hero';

import Home from './pages/Home';

import { useEffect, useState } from 'react';
import { client } from './client';

function App() {
  const [contentfulData, setContentfulData] = useState([]);

  useEffect(() => {
    client
      .getEntries()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
      </header>
      <main className="App-main">
        {/* <h1>Main</h1> */}
        <Home />
        <AllBoxes />
        <ScrollingText />
        <AllBlogs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
