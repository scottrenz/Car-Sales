import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import '../src/styles.css'
function App() {
  return (
    <div className="App">
    <div className="boxes">
      <div className="box">
      <Header  />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total />
      </div>
    </div>
    </div>
  );
}

export default App;
