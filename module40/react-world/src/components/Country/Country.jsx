import React from 'react';
import './Country.css';

const Country = ({ country, handleVisitedCountry, handleVisitedFlag }) => {
    // console.log(country);
    const [visited, setVisited] = React.useState(false);

    const btnStyle = {
        backgroundColor: visited ? 'green' : 'red'
    }

    const handleClick = () => {
        setVisited(!visited);
        if(!visited){
            handleVisitedCountry(country);
        }
    }

    return (
        <div className='country'>
            <h3 className='country-name'>Name: {country.name.common}</h3>
            <img src={country.flags.png} alt="" className='country-flag' />
            <p className='country-status'>
                Independent: {country.independent ? 'Free!' : 'Not Free!'}
            </p>
            <p className='country-info'>
                Population: {country.population}
            </p>
            <button style={btnStyle} className='btn' onClick={handleClick}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
            <button className='btn' onClick={() => handleVisitedFlag(country.flags.png)}>
                Add Flags!
            </button>
        </div>
    );
};

export default Country;