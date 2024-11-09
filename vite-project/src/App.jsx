import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      case 'Header':
        return <Header />;
      case 'Footer':
        return <Footer />;
      default:
        return <About />;
    }
  };

  return (
    <div>
    <Header setPage={setCurrentPage} />

    {renderPage()}

    <footer>
      <p>© 2024 My Portfolio</p>
    </footer>
  </div>
);
}

export default App
