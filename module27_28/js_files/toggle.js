document.getElementById("add-money-button").addEventListener("click", 
    function () {
        handleToggleVisible("add-money", "hidden");
        handleToggleHidden("cash-out", "hidden");
        handleToggleHidden("transaction", "hidden");
    }
);

document.getElementById("cash-out-button").addEventListener("click", 
    function () {
        handleToggleVisible("cash-out", "hidden");
        handleToggleHidden("add-money", "hidden");
        handleToggleHidden("transaction", "hidden");
    }
);

document.getElementById("transaction-button").addEventListener("click", 
    function() {
        handleToggleVisible("transaction", "hidden");
        handleToggleHidden("add-money", "hidden");
        handleToggleHidden("cash-out", "hidden");
    }
);