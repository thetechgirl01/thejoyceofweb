import React, { lazy, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Bookcall from './components/Bookcall.jsx';
import Footer from './components/Footer.jsx';
import RouteMetadata from './components/RouteMetadata.jsx';
import NotFound from './pages/NotFound.jsx';
import PageErrorBoundary from './components/PageErrorBoundary.jsx';
import { Routes, Route, useLocation } from 'react-router-dom';

// Pages
import Home from './pages/Home';
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Works = lazy(() => import('./pages/works'));
const Blogs = lazy(() => import('./pages/Blogs'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/Faq'));
const BlogContentPage = lazy(() => import('./pages/BlogContentPage.jsx'));
const WorkContentPage = lazy(() => import('./pages/WorkContntPage.jsx'));
const Errandsbybrownie = lazy(() => import('./pages/projects/Errandsbybrownie.jsx'));

function App() {
  const { pathname } = useLocation();
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <RouteMetadata />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <PageErrorBoundary key={pathname}>
          <Suspense fallback={<p role="status" className="min-h-screen px-6 pt-32">Loading page...</p>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/works" element={<Works />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blog/:id" element={<BlogContentPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/work" element={<WorkContentPage />} />
              <Route path="*" element={<NotFound />} />

              <Route path="/projects/errands-by-brownie" element={<Errandsbybrownie />} />
            </Routes>
          </Suspense>
        </PageErrorBoundary>
      </main>

      <Bookcall />
      <div className="px-9 rounded-tr-3xl rounded-tl-3xl">
        <Footer />
      </div>
    </>
  );
}

export default App;