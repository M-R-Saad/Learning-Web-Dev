document.getElementById("login-btn").addEventListener("click",
    function (event) {
        event.preventDefault();
        
        const accountNo = getInputValueFromID("account-no");
        const pinNo = getInputValueFromID("pin-no");

        if(accountNo.length === 11) {
            if(pinNo === "1234") {
                window.location.href = "main.html";
            }
            else {
                alert("Invalid PIN. Please try again.");
            }
        }
        else {
            alert("Account number must be 11 digits long.");
        }
    }
);
