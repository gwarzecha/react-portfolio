import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav'
import About from './components/About';
import Project from './components/Project';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';


function App() {

  const [currentPage, handlePageChange] = useState('About');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'Project':
        return <Project />;
      case 'Contact':
        return <ContactForm />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div className="App">
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
        <div>
          {renderPage(currentPage)}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
