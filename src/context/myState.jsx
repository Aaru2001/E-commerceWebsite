/* eslint-disable react/prop-types */
import { useState } from 'react';
import React from 'react';
import MyContext from './myContext';

function MyState({children}) {

  const [loading, setLoading] = useState(false);
 
    const name = "Aaru Rajput"
  return (
    <MyContext.Provider value={{loading,setLoading}}>
       {children}
    </MyContext.Provider>
  )
}

export default MyState;

