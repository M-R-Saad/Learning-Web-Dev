const loadData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(data => console.log(data))
}

loadData();

const fetchData = () => {
    return new Promise((resolve, reject) => {
        const status = true;
        if (status) {
            // resolve({name: "John", age: 30})

            // const data = Promise.resolve({name: "John", age: 30});
            // data.then(res => resolve(res));

            const data = {
                json: () => Promise.resolve({name: "John", age: 30})
            }

            resolve(data);
        }
        else {
            reject("Failed to fetch data")
        }
    })
}

fetchData()
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));