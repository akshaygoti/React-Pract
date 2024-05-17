const initial_state = {
    carts: [],
    Wishlist:[]
}

export const cartreducer = (state = initial_state, action) => {
    switch (action.type) {
        case "Add_to_CART":
            return {
                ...state,
                carts: [...state.carts, action.payload]
            }

            case "REMOVE_TO_ADD":{
                state.carts = state.carts.filter((item)=>item.id !== action.payload);
                // console.log("hello add")
                return{
                    ...state,
                    carts : [...state.carts]
                }
            }
        case "Add_To_wishlist":{
            // console.log("hello");
            return {
                ...state,
                Wishlist: [...state.Wishlist, action.payload]
            }
        }
        case "REMOVE_TO_WISHLIST":
            state.Wishlist = state.Wishlist.filter((item)=>item.id !== action.payload);
            // console.log("filter",state.Wishlist)
            // console.log("remove");
            return{
                ...state,
                Wishlist:[...state.Wishlist]
            }
        default:
            return state
    }
}