export const cartReduserFunction = (cartState, action) => {
    //console.log(cartState, action.typ, action.payload)
    switch (action.type) {
        case "addToCart":
            return { count: cartState.count + 1, cartItems: [...cartState.cartItems, action.payload] }
        case "removeFromCart":
        default:
            return cartState
    }
}
