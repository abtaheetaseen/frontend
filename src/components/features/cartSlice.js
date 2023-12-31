import {createSlice} from '@reduxjs/toolkit'
import {toast} from 'react-toastify';

const initialState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // addtocart reducer
        addToCart(state, action){
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info(`You have increased the quantity of ${action.payload.name}`, {
                    position: 'bottom-left',
                    theme: 'dark',
                })
            } else {
                const tempProduct = {...action.payload, cartQuantity: 1};
            state.cartItems.push(tempProduct);
            toast.success(`${action.payload.name} added to cart`, {
                position: 'top-right',
                theme: 'dark',
            })
            }

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },

        // remove from cart reducer
        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)

            state.cartItems = nextCartItems;
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },

        // decrease from cart
        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex((cartItem) => cartItem.id === action.payload.id);

            if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -= 1;
            }

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },

        // increase from cart
        increaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex((cartItem) => cartItem.id === action.payload.id);

            if(state.cartItems[itemIndex].cartQuantity >= 1){
                state.cartItems[itemIndex].cartQuantity += 1;
            }

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },

        // clear the cart
        clearCart(state, action) {
            state.cartItems = [];

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },

        // subtotal price
        getTotals(state, action){
            let {total, quantity} = state.cartItems.reduce((cartTotal, cartItem) => {

                const {price, cartQuantity} = cartItem;

                const itemTotal = price * cartQuantity;

                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;

                return cartTotal;
            }, {
                total: 0,
                quantity: 0
            })

            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;

        },
    }
})

export const {addToCart, removeFromCart, decreaseCart, increaseCart, clearCart, getTotals} = cartSlice.actions;

export default cartSlice.reducer;