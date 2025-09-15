document.getElementById("add-money-btn").addEventListener("click", 
    function() {
        event.preventDefault();
        const accountNo = getInputValueFromID("account-no");
        const pinNo = parseInt(getInputValueFromID("pin-no"));

        const amount = parseFloat(getInputValueFromID("add-amount"));
        const mainBalance = parseFloat(getInnerTextFromID("main-balance"));

        const selectedBank = getInputValueFromID("all-bank");

        // console.log(accountNo, pinNo, amount, mainBalance);
        // console.log(typeof accountNo, typeof pinNo, typeof amount, typeof mainBalance);

        if(accountNo.length === 11) {
            if(pinNo === 1234) {
                if(amount > 0) {
                    const newBalance = mainBalance + amount;
                    setInnerTextToID("main-balance", newBalance);
                    alert("Money Added Successfully!");

                    const transactionHistory = document.getElementById("transaction-history");
                    const div = document.createElement("div");
                    div.classList.add("add-history");
                    div.innerHTML = `
                        <h1>Added Money From <span class="font-semibold">${selectedBank}</span>.</h1>
                        <p>Account No: <span class="font-semibold">${accountNo}</span></p>
                        <p>Amount: <span class="font-semibold text-blue-500">$${amount}</span></p>`;
                    transactionHistory.prepend(div);
                } 
                else {
                    alert("Please enter a valid amount!");
                }
            } 
            else {
                alert("Incorrect PIN. Please try again.");
            }
        } 
        else {
            alert("Account number must be 11 digits long.");
        }
    }
);

// Logout button functionality
document.getElementById("logout-button").addEventListener("click", 
    function() {
        window.location.href = "index.html";
    }
);
