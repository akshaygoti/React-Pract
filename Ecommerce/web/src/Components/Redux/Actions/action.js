export const Add = (item)=>{
    return{
        type:"Add_to_CART",
        payload:item
    }
}

export const Remove_Add = (id)=>{
    return{
        type:"REMOVE_TO_ADD",
        payload:id
    }
}

export const ADDWISH = (item)=>{
    return{
        type:"Add_To_wishlist",
        payload:item
    }
}

export const Remove_Wishlist = (id)=>{
    return{
        type:"REMOVE_TO_WISHLIST",
        payload:id
    }
}
