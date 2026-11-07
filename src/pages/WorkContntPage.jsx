import { Link } from 'react-router-dom';

// The previous content was an unrelated sports demo with test checkout links.
// Keep the existing URL available while approved project content is pending.
export default function WorkContentPage() {
  return (
    <div className="min-h-screen bg px-6 pt-32 pb-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-6xl text-white mb-8">Our Work</h1>
        <Link to="/works" className="underline text-yellow-400">View projects</Link>
      </div>
    </div>
  );
}
