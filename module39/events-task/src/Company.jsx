import Person from "./Person";
import { useEffect, useState } from "react";

function Company({ personsPromise }) {

    const [persons, setPersons] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setPersons(data))
            .catch(err => console.log(err));
    }, []);


    return (
        <div className="counter">
            <h1>My Company</h1>
            <h3>Member Count: {persons.length}</h3>
            <ol>
                {
                    persons.map(person => {
                        return <Person key={person.id} person={person}></Person>
                    })
                }
            </ol>
        </div>
    );
}

export default Company;