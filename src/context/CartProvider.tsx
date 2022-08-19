import React, { FC, useReducer } from "react";

import { foodType } from "../Types";

import CartContext, { cartReducer, defaultCart } from "./CartContext";

const CartProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, dispatchFood] = useReducer(cartReducer, defaultCart);

    const addFoodCart = (item: foodType) => {
        dispatchFood({ type: "ADD", foodItem: item });
    };

    const removeFoodCart = (item: foodType) => {
        dispatchFood({ type: "REMOVE", foodItem: item });
    };

    const cartValue = {
        cartList: cart.cartList,
        totalAmount: cart.totalAmount,
        addFoodCart: addFoodCart,
        removeFoodCart: removeFoodCart,
    };

    return (
        <CartContext.Provider value={cartValue}>
            {children}
        </CartContext.Provider>
    );
};
export default CartProvider;
