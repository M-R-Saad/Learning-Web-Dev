// This JS file is for the common functionalities and challenge tasks.


// Challenge Task 1: Change background color randomly on button click.
document.getElementById('theme-btn').addEventListener('click', 
    function() {
        const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        document.body.style.backgroundColor = randomColor;
    }
);

