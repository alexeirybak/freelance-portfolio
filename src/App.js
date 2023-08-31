import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Contacts from './pages/Contacts';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ScrollToTop from './utils/scrollToTop';
import './styles/main.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/project/:id' element={<Project />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;