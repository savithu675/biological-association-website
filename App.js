// Import necessary components from react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import About from './about us';
import Contact from './contact us';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
