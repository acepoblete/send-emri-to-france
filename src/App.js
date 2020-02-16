import React from 'react';
import Counter from './components/Counter'
import YouTube from './components/YouTube';
import Social from './components/Social';

import './App.scss';

function App() {
  return (
    <>

      <div className="timeblock clearfix">
        <div className="container header">
          <h1>Help Send Emri to France</h1>
        </div>
      </div>

      <div className="container video">
        <YouTube />
      </div>

      <div className="timeblock clearfix">
        <div className="container">
          <Counter />
        </div>
      </div>





      <div className="container">
        <Social />
      </div>
    </>
  );
}

export default App;
