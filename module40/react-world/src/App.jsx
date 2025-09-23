import './App.css'
import Countries from './components/Countries/Countries';
import React, { Suspense } from 'react';

const countryPromise = fetch('https://restcountries.com/v3.1/all?fields=name,flags,independent,population,ccn3')
                        .then(res => res.json());

function App() {

  return (
    <>
      <Suspense fallback={<h1>Loading Countries...</h1>}>
        <Countries countryPromise={countryPromise} />
      </Suspense>
      
    </>
  )
}

export default App
