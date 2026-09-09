import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Card from './Card';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleRequestService = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <BrowserRouter>
      <Navbar cartCount={cartCount} />
      
      <div className="container text-center mb-5">
        <h1 className="text-primary mb-4 mt-4">My React Website 💖</h1>
        
        <Routes>
          
          <Route path="/" element={
            <>
              <Home />
              <hr className="my-5 border-primary" />
              <h3 className="text-primary">My Featured Projects ✨</h3>
              <div className="row justify-content-center">
                <div className="col-md-5">
                  <Card title="React SPA 🌟" text="Building fast, interactive single page applications." />
                </div>
                <div className="col-md-5">
                  <Card title="Bootstrap Design 🎨" text="Creating beautiful responsive user interfaces." />
                </div>
              </div>
            </>
          } />

          {/* About Route shows About with your Photo & CV */}
          <Route path="/about" element={<About />} />
          
          <Route path="/services" element={
            <Services 
              title="My Awesome Services 💅" 
              servicesList={[
                "✨ Custom Web Development", 
                "🚀 React Single Page Applications", 
                "🎨 Beautiful UI/UX Implementations"
              ]} 
              onRequestService={handleRequestService}
            />
          } />

          {/* Portfolio Route shows your Projects */}
          <Route path="/portfolio" element={<Portfolio />} />
          
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </div>

      <footer className="bg-white text-center py-3 border-top border-primary mt-auto">
        <p className="text-primary mb-0">© 2026 | Built with 💖 by Radwa Usama Sengr</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;