import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ countryPromise }) => {
    
    const countries = use(countryPromise);
    // console.log(countries);

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([]);

    const handleVisitedCountry = (country) => {
        setVisitedCountries([...visitedCountries, country]);
    }

    const handleVisitedFlag = (flag) => {
        setVisitedFlag([...visitedFlag, flag]);
    }

    return (
        <div className='countries'>
            <h1>Traveling Countries: {countries.length}</h1>
            <h2>Traveled So Far: {visitedCountries.length}</h2>
            <ol className='list-items'>
                {
                    visitedCountries.map(country => <li key={country.ccn3}>{country.name.common}</li>)
                }
            </ol>
            <div className='flags-container'>
                {
                    visitedFlag.map((flag, index) => <img key={index} src={flag} alt="" className='visited-flag' />)
                }
            </div>
            <div className='countries-grid'>
                {
                    countries.map(country => <Country 
                                                key={country.ccn3} 
                                                country={country}
                                                handleVisitedCountry={handleVisitedCountry}
                                                handleVisitedFlag={handleVisitedFlag}
                                            />
                    )
                }
            </div>
        </div>
    );
};

export default Countries;