const fetchData = async () => {

    console.log('Fetching data...');

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
    } 
    catch (error) {
        console.error('Error fetching data:', error);
    }

    console.log('Data fetched successfully!');
}

fetchData();