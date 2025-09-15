function getInputValueFromID (id) {
    return document.getElementById(id).value;
}

function getInnerTextFromID (id) {
    return document.getElementById(id).innerText;
}

function setInnerTextToID (id, value) {
    document.getElementById(id).innerText = value;
}

function handleToggleVisible(id, status) {
    document.getElementById(id).classList.remove(status);
}

function handleToggleHidden(id, status) {
    document.getElementById(id).classList.add(status);
}