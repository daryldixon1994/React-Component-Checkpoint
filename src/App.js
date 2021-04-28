import React from 'react';
import Adress from './component/profil/Address';
import FullName from './component/profil/FullName';
import ProfilePhoto from './component/profil/ProfilePhoto';
import './App.css'

function App() {
  return (
    <div className="App">
      <FullName />
      <ProfilePhoto />
      <Adress />
    </div>
  );
}

export default App;
