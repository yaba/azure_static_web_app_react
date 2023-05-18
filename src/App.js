import React from 'react';

function App() {
  const value = 'World';
  return <div>Hello {value} - Env Var: %REACT_APP_MSG%</div>;
}

export default App;
