import React from 'react';

function App() {
  const value = 'World';
  const myappsetting = process.env.TEST_MSG;
  return <div>Hello {value} - Env Var: {myappsetting}</div>;
}

export default App;
