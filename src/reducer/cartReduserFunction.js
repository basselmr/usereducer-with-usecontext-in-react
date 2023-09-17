export const cartReduserFunction = (cartState, action) => {
    //console.log(cartState, action.typ, action.payload)
    switch (action.type) {
        case "addToCart":
            //console.log(action.payload)
            let newItem = true;
            console.log(cartState)
            const items=cartState.cartItems.map(itm=>{
                if (itm.id===action.payload.id){
                    newItem=false
                    return {...itm,qty:itm.qty+1};
                } else {
                    return itm;
                }
            })
            if (newItem){
                return { count: cartState.count + 1, cartItems: [...cartState.cartItems,{...action.payload,qty:1}]}
            } else {
                return { count: cartState.count + 1, cartItems: items}
            }
        //case "removeFromCart":
        default:
            return cartState
    }
}
