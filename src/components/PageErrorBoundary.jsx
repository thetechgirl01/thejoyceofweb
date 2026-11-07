import { Component } from 'react';

// A failed route/chunk should offer recovery without exposing exception details.
export default class PageErrorBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) {
      return (
        <div className="min-h-screen px-6 pt-32 pb-16">
          <h1 className="text-3xl text-white mb-6">This page could not load</h1>
          <p role="alert" className="text-gray-300 mb-6">Please reload the page and try again.</p>
          <button type="button" onClick={() => window.location.reload()} className="bg-yellow-400 text-black px-6 py-3 rounded-full">Reload page</button>
        </div>
      );
    }
    return this.props.children;
  }
}
