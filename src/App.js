import React from 'react';
import AppForecast from './components/Forecast';

import './CSS/index.css' //my custome css styles

//importing components in bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='AppBody'>
      <AppForecast />
    </div>
  );
}

export default App;
