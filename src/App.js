import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import MainLayout from './layouts/MainLayout';
import Home from './components/Home';
import PhotographyByGenre from './components/PhotographyByGenre';
import Animation from './components/Animation';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Success from './components/Success';
import SingleAnimation from './components/SingleAnimation';
import SinglePhotoProject from './components/SinglePhotoProject';
import './App.css';
import './custom-styles.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="photography/:genre" element={<PhotographyByGenre />} />
            <Route path="photography/:genre/:id" element={<SinglePhotoProject />} />
            <Route path="photography/not-found" element={<NotFound />} />
            <Route path="animation" element={<Animation />} />
            <Route path="animation/:id" element={<SingleAnimation />} />
            <Route path="animation/not-found" element={<NotFound />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="success" element={<Success />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <script defer src="https://analytics.eu.umami.is/script.js" data-website-id="00e85906-f111-41c0-94d1-897881eb8c54"></script>        
      </div>
    </BrowserRouter>
  );
}

export default App;
