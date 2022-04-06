import React from 'react';
import './app.component.scss';

const AppComponent =()=> {

  const data = {data:{ nombre: null}}
  return(
    <>
    <h1 className='container-component'>Working react configured with webpack check {data?.data?.nombre || 'vacio'}</h1>
    </>
  )
};

export default AppComponent;