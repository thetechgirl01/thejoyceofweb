import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pages = {
  '/': ['Web Design & Development', 'Crownatech is a creative code studio building websites and software solutions for businesses and startups.'],
  '/about': ['About Us', 'Learn about Crownatech, our services, and our approach to web design and development.'],
  '/works': ['Our Work', 'Explore Crownatech web design and development projects.'],
  '/blogs': ['Blog', 'Articles on web development, design, technology, and business from Crownatech.'],
  '/contact': ['Contact Us', 'Get in touch with Crownatech about your website or software project.'],
  '/faq': ['Frequently Asked Questions', 'Find answers to common questions about Crownatech web design and development services.'],
  '/projects/errands-by-brownie': ['Errands by Brownie', 'Explore the Errands by Brownie website project in the Crownatech portfolio.'],
  '/work': ['Project Overview', 'Project overview from Crownatech.', true],
};

// Update the static head in place, keeping one instance of each tag across SPA navigation.
export default function RouteMetadata() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/+$/, '') || '/';
  useEffect(() => {
    const page = pages[path] || ['Page Not Found', 'The requested Crownatech page could not be found.', true];
    const title = `Crownatech | ${page[0]}`;
    const url = `https://www.crownatech.com${path === '/' ? '/' : path}`;
    document.title = title;
    const update = (selector, value) => document.querySelector(selector)?.setAttribute('content', value);
    update('meta[name="description"]', page[1]);
    update('meta[name="robots"]', page[2] ? 'noindex, follow' : 'index, follow');
    update('meta[property="og:title"]', title);
    update('meta[property="og:description"]', page[1]);
    update('meta[property="og:url"]', url);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', url);
  }, [path]);
  return null;
}
