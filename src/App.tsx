import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Play from './components/Play';
import Start from './components/Start';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Start/>} />
          <Route path='/play' element={<Play/>}/>
        </Routes>
    </div>
  );
}

export default App;
