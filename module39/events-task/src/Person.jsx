

function Person({ person }) {

    // console.log(person);

    const { name, company, address } = person;

    return (
        <li>Name: {name},<br /> Company: {company.name},<br /> City: {address.city}</li>
    );
}

export default Person;