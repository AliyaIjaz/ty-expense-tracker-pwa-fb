import { useEffect } from 'react';
import Home from './Home';
import { TransactionProvider } from './transContext'
import { configMsg } from './firebase';

import './App.css';

function App() {

  useEffect(() => {
    configMsg();
  }, [])
  return (
    <TransactionProvider>
      <div className="App">
        <Home />
      </div>
    </TransactionProvider>
  )
}

export default App;
