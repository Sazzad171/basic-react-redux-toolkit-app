import React from 'react';
import CounterView from './features/counter/CounterView';
import LayoutView from './features/layouts/LayoutView';

function App() {

  return (
    <>
      <h2>Counter App with Redux Toolkit</h2>
      <CounterView />
      <LayoutView />
    </>
  )
}

export default App;