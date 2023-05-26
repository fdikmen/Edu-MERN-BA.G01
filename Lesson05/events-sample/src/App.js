import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Event listener for when a key is pressed
    const handleKeyDown = (event) => {
      console.log('Key Pressed:', event.key);
    };

    // Event listener for when a key is released
    const handleKeyUp = (event) => {
      console.log('Key Released:', event.key);
    };

    // Add the event listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    // Return a cleanup function to remove the event listeners
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="App">
      <h1>Keyboard Events</h1>
      <p>Press or release a key and check the console!</p>
    </div>
  );
}

export default App;

