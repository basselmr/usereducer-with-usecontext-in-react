export const cartReduserFunction = (cartState, action) => {
    //console.log(cartState, action.typ, action.payload)
    let cart_items = [];
    switch (action.type) {
        case "addToCart":
            //console.log(action.payload)
            let newItem = true;
            //console.log(cartState)
            cart_items = cartState.cartItems.map(itm => {
                if (itm.id === action.payload.id) {
                    newItem = false
                    return { ...itm, qty: itm.qty + 1 };
                } else {
                    return itm;
                }
            })
            if (newItem) {
                return { count: cartState.count + 1, cartItems: [...cartState.cartItems, { ...action.payload, qty: 1 }] }
            } else {
                return { count: cartState.count + 1, cartItems: cart_items }
            }
        //case "removeFromCart":
        case "QTY_Increment":
            cart_items = cartState.cartItems.map(itm => {
                if (itm.id === action.payload) {
                    return { ...itm, qty: itm.qty + 1 };
                } else {
                    return itm
                }
            })
            return { count: cartState.count + 1, cartItems: cart_items }
        case "QTY_Decrement":
            cart_items = cartState.cartItems.map(itm => {
                if (itm.id === action.payload) {
                    return { ...itm, qty: itm.qty - 1 };
                } else {
                    return itm
                }
            })
            cart_items = cart_items.filter(itm => itm.qty !== 0)
            return { count: cartState.count - 1, cartItems: cart_items }
        case "removeFromCart":
            return {
                count: cartState.count - action.payload.ItemQTY,
                cartItems: cartState.cartItems.filter(itm => action.payload.ItemId !== itm.id)
            }
        default:
            return cartState
    }
}
