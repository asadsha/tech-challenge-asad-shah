import React from 'react';
import RoutesPrimary from './routes';

function App() {
  // Render the main application component
  return (
    <main className='d-flex flex-column min-vh-100'>
      {/* Content area */}
      <div className='flex-fill'>
        {/* Render the primary routes */}
        {/* rrrr */}
        <RoutesPrimary />
      </div>
    </main>
  );
}

export default App;
