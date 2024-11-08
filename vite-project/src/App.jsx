import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Header from './components/Header'
import About from './components/about'
import Portfolio from './components/portfolio'
import Contact from './components/contact'
import Resume from './components/resume'

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
