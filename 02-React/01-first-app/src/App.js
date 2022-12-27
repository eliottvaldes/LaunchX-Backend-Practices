import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

function App() {
  // define the root element using virtual react DOM
  const root = ReactDOM.createRoot(document.getElementById('root'));

  // get current localTime
  let localTime = new Date()  
  // get qatar time using the difference of 9 hours
  let qatarTime = new Date(localTime.getTime() + (3600000 * 9))


  // ** APP USING DECLARATIVE FORM
  const typeComponent = React.createElement(
    'h1',
    {},
    '** DECLARATIVE FORM **'
  )

  const title = React.createElement(
    'h1',
    {},
    'The current world time is:'
  )

  const mexicoTimeComponent = React.createElement(
    'h3',
    {},
    `México: ${new Date().toLocaleTimeString('es-MX')}`

  )

  const qatarTimeComponent = React.createElement(
    'h3',
    {},
    `Qatar (local): ${qatarTime.toLocaleTimeString('es-MX')}`
  )
  
  const headerApp = React.createElement(
    'header',
    {className: 'App-header'},
    typeComponent, title , mexicoTimeComponent , qatarTimeComponent
  )

  const declarativeApp = React.createElement(
    'div',
    {className: 'App'},
    headerApp
  )

  

  // ** APP USING JSX FORM
  const jsxApp = (
    <div className="App">
      <header className="App-header">
        <h1>** JSX FORM **</h1>
        <h1>The current world time is:</h1>
        {/* show te current hour */}
        <h3> México: {new Date().toLocaleTimeString('es-MX')} </h3>
        <h3> Qatar (local): {qatarTime.toLocaleTimeString('es-MX')} </h3>
        <h3> United Stated: {new Date().toLocaleTimeString('en-US')} </h3>
        <h3> Korea: {new Date().toLocaleTimeString('ko-KR')} </h3>
        <h3> Qatar: {new Date().toLocaleTimeString('ar-QA')} </h3>
      </header>
    </div>
  );

  // render app -> mount the 2 ways to create elements
  root.render([declarativeApp , jsxApp]);
}

export default App;
