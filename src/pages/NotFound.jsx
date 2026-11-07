import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen px-6 pt-32 pb-16 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-5xl text-white mb-6">Page not found</h1>
      <p className="text-gray-300 mb-6">We could not find the page you requested.</p>
      <Link to="/" className="underline text-yellow-400">Return to the homepage</Link>
    </div>
  );
}
