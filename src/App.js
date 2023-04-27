import './App.css';
import AllBlogs from './components/AllBlogs';
import AllBoxes from './components/AllBoxes';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollingText from './components/ScrollingText';

import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div className="headerParent">
          <p className="headerText">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In libero
            officiis ipsa, obcaecati et ratione vero aperiam alias voluptatum
            temporibus consequatur omnis at eos natus nostrum blanditiis dolor
            ea quae!
          </p>
          <img
            className="headerImage"
            src="https://picsum.photos/600/200"
            alt="dummy"
          />
        </div>
      </header>
      <main className="App-main">
        <h1>Main</h1>
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
