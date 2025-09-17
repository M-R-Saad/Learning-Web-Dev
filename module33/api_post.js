const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPost(data))
        .catch(error => console.error('Error fetching data:', error));
}

const postContainer = document.getElementById('post-container');

const displayPost = (posts) => {

    for (const post of posts) {
        // console.log(post);

        const div = document.createElement('div');
        div.style.border = '2px solid black';
        div.style.margin = '20px';
        div.style.padding = '20px';
        div.classList.add('post');
        div.innerHTML = `
            <h3>User-Id: ${post.userId}</h3>
            <h4>Id: ${post.id}</h4>
            <h5>Title: ${post.title}</h5>
            <p>Body: ${post.body}</p>
        `;
        postContainer.appendChild(div);
    }
}
