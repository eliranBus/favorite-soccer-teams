import React from 'react';
import './App.css';
import DataTable from './components/DataTable'
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';

function App() {
  return (
    <div className="App">
      <h1>
      <SportsSoccerIcon/>
        Top Soccer Teams
      <SportsSoccerIcon/>
      </h1>
      <DataTable/>
    </div>
  );
}

export default App;
