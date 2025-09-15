document.getElementById("withdraw-btn").addEventListener("click", 
    function () {
        event.preventDefault();
        const agentNo = getInputValueFromID("agent-no");
        const pinNo = getInputValueFromID("pin-no");

        const amount = parseFloat(getInputValueFromID("withdraw-amount")); // Changed from "amount" to "withdraw-amount" because of conflict with add_money.js
        const mainBalance = parseFloat(getInnerTextFromID("main-balance"));

        // console.log(agentNo, pinNo, amount, mainBalance);
        // console.log(typeof agentNo, typeof pinNo, typeof amount, typeof mainBalance);

        if(agentNo.length === 11) {
            if(pinNo === "1234") {
                if(amount > 0 && amount <= mainBalance) {
                    const newBalance = mainBalance - amount;
                    setInnerTextToID("main-balance", newBalance);
                    alert(`Successfully withdrew ${amount} from agent ${agentNo}.`);

                    const transactionHistory = document.getElementById("transaction-history");
                    const div = document.createElement("div");
                    div.classList.add("withdraw-history");
                    div.innerHTML = `
                        <h1>Withdrew Money From <span class="font-semibold">Agent</span>.</h1>
                        <p>Account No: <span class="font-semibold">${agentNo}</span></p>
                        <p>Amount: <span class="font-semibold text-red-500">$${amount}</span></p>`;
                    transactionHistory.prepend(div);
                } 
                else {
                    alert("Invalid amount.");
                }
            } 
            else {
                alert("Invalid PIN.");
            }
        } 
        else {
            alert("Invalid agent number.");
        }
    }
);