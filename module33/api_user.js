const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUser(data))
        .catch(error => console.error('Error fetching data:', error));
}

const userNameList = document.getElementById('user-names');

const displayUser = (users) => {
    for (const user of users) {
        const li = document.createElement('li');
        li.innerText = user.name;
        userNameList.appendChild(li);
    }
}


