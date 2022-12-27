import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

function App() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const element = (
    <div className="App">
      <header className="App-header">
        <h1> The current world time is: </h1>
        {/* show te current hour */}
        <h3> México: {new Date().toLocaleTimeString('es-MX')} </h3>
        <h3> United Stated: {new Date().toLocaleTimeString('en-US')} </h3>
        <h3> Korea: {new Date().toLocaleTimeString('ko-KR')} </h3>
        <h3> Qatar: {new Date().toLocaleTimeString('ar-QA')} </h3>
      </header>
    </div>
  );

  // render the app
  root.render(element)
}

export default App;
