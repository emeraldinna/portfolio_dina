import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './components/Home';
import './App.css';
import './custom-styles.css';
import Photography from './components/Photography';
import Animation from './components/Animation';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Success from './components/Success';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="photography" element={<Photography />} />
            <Route path="photography/:genre" element={<Photography />} />
            <Route path="animation" element={<Animation />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="success" element={<Success />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
