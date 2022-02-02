import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Ramp from './components/Ramp';

ReactDOM.render(
  <React.StrictMode>
    <Ramp input="sometimes,"/>
    <Ramp input={0n}/>
    <Ramp input={["time", "waits", "for", "no", "one."]} />
  </React.StrictMode>,
  document.getElementById('root')
);
