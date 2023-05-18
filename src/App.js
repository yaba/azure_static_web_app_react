import React from 'react';

function App() {
  const value = 'World';
  return <div>REACT_APP_MSG: {process.env.REACT_APP_MSG ?? "No environment variables exposed to the browser"}</div>;
  
}

export default App;
