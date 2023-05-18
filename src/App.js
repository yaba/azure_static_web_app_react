import React from 'react';

function App() {
  const value = 'World';
  const myappsetting = process.env.TEST_MSG;
  return <div>Hello {value}</div></br><p>Env Var: {myappsetting}</p>;
}

export default App;
