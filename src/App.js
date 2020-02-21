import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { getArrFromStorage } from './Services/localStorageServices'

function App() {

  // const arrayOfUsersFromLS = JSON.parse(localStorage.getItem('arrOfUsersLS')) || [];
  // console.log(getArrFromStorage())

  const arrayOfUsersFromLS = getArrFromStorage();

  const [userArr, setUserArr] = useState(arrayOfUsersFromLS);

  console.log(userArr);

  return (
      <>
        <Header />
        <Main userArr={userArr} 
        setUserArr={setUserArr} />
        <Footer userArr={userArr} />
      </>
  );
}

export default App;
