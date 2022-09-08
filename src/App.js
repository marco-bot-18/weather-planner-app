import React from 'react';
import AppForecast from './components/ForecastMain';

import './CSS/index.css' //my custom css styles

//importing components in bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <AppForecast />
    </div>
  );
}

export default App;
