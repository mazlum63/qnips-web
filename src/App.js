import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Login from './components/Login';
import Products from './components/Products';

function App() {
  const user = useSelector((state) => state.user);
  useEffect(() => {
  }, [user])

  return (
    <div className="App">
      {(user.status) ? (<Products />) : (<Login />)}
    </div>
  );
}

export default App;
