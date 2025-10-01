const getCartFromLocalStorage = () => {
    const cartString = localStorage.getItem('cart');

    if(cartString) {
        return JSON.parse(cartString);
    }
    return [];
}

const addItemToLocalStorage = (id) => {
    const cart = getCartFromLocalStorage();
    cart.push(id);

    localStorage.setItem('cart', JSON.stringify(cart));
}

const removeItemFromLocalStorage = (id) => {
    let cart = getCartFromLocalStorage();
    cart = cart.filter(itemId => itemId !== id);
    
    localStorage.setItem('cart', JSON.stringify(cart));
}

export { 
    getCartFromLocalStorage as getCartLS, 
    addItemToLocalStorage as addItemLS,
    removeItemFromLocalStorage as removeItemLS 
};