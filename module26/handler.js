document.getElementById("update-button").addEventListener("click", function() {
    document.getElementById("title").textContent = "Event Handler - Updated 😁";
});

document.getElementById("login-button").addEventListener("click", function() {
    document.getElementById("user-info").textContent = "Tom";
});


document.getElementById("comment-button").addEventListener("click", function() {

    const comment = document.getElementById("comment-input").value;
    
    const container = document.getElementById("comment-container");

    const p = document.createElement("p");
    p.innerText = comment;
    p.classList.add("comment");

    container.appendChild(p);

    document.getElementById("comment-input").value = "";
});