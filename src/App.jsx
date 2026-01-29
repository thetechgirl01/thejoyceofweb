import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Bookcall from './components/Bookcall.jsx';
import Footer from './components/Footer.jsx';
import useFetch from './hooks/useFetch.js';
import { Routes, Route } from 'react-router-dom';
import Logo from './assets/tklogo.png'

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Works from './pages/works';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import FAQ from './pages/Faq';
import BlogContentPage from './pages/BlogContentPage.jsx';
import WorkContentPage from './pages/WorkContntPage.jsx';
import Errandsbybrownie from './pages/projects/Errandsbybrownie.jsx';

function App() {
  // Fetch all blogs from Strapi with images populated
  const { loading, error, data } = useFetch('http://localhost:1337/api/blogs?populate=*');

  const blogsData = data?.data || [];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center self-center justify-center text-center ">
        <div className="">
          <img src={Logo} alt="" className='w-24 h-24 mx-auto'/>
          <h1 className='text-2xl'>CrownaTech
        </h1>
        <h2 className="text-gray-500 ">
             Web Development Services.
             
        </h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl text-red-600 mb-4">Error Loading site, confirm internet connection</h1>
      
      </div>
    );
  }
  console.log('App.jsx - blogsData to pass:', blogsData);


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home blogs={blogsData} />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/works" element={<Works />} />
        <Route path="/blogs" element={<Blogs blogs={blogsData} />} />
        <Route path="/blog/:id" element={<BlogContentPage blogs={blogsData} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/work" element={<WorkContentPage/>} />
        <Route path="*" element={<Blogs blogs={blogsData} />} />

       <Route path="/projects/errands-by-brownie" element={<Errandsbybrownie />} />
      </Routes>
      <Bookcall />
      <div className="px-9 rounded-tr-3xl rounded-tl-3xl">
        <Footer />
      </div>
    </>
  );
}

export default App;
