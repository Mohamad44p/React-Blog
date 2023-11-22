import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/blogs/:id" element={<BlogDetails />} />
          <Route exact path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
