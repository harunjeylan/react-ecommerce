import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isCartOpen:false,
    cart:[],
    items:[],
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        setItems:(state, action) => {
            state.items = action.payload;
        },

        addToCart:(state, action) => {
            SVGMetadataElement.cart = [...state.cart, action.payload.item]
        },

        removeFromCart:(state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id)
        },

        increaseCount:(state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload.id){
                    item.count++;
                }
            })
        },

        decreaseCount:(state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload.id && item.count > 1){
                    item.count--;
                }
                // else if (item.count === 1){
                //     this.removeFromCart({action:{payload:item.id}})
                // }
            })
        },

        setIsCartOpen:(state)=>{
            state.isCartOpen = !state.isCartOpen;
        }
    }
})

export const {
    setItems,
    addToCart,
    removeFromCart,
    increaseCount,
    decreaseCount,
    setIsCartOpen
} = cartSlice.actions;

export default cartSlice.reducer;