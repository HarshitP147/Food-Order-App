import { createContext } from "react";

import cartType, { Action, State, foodType } from "../Types";

const CartContext = createContext<cartType>({
    cartList: [],
    totalAmount: 0,
    addFoodCart: (item: foodType): void => {},
    removeFoodCart: (item: foodType): void => {},
});
CartContext.displayName = "CartContext";
export default CartContext;

export const defaultCart: State = {
    cartList: [],
    totalAmount: 0,
};

export function cartReducer(state: State, action: Action): State {
    let updatedTotalAmount: number;
    if (action.type === "ADD") {
        updatedTotalAmount = state.totalAmount + action.foodItem.price;
        const existingIndex = state.cartList.findIndex(
            (ele) => ele.id === action.foodItem.id
        );

        let updatedFoodList: foodType[];
        if (existingIndex === -1) {
            updatedFoodList = state.cartList.concat(action.foodItem);
        } else {
            let updatedFoodItem = {
                ...action.foodItem,
                price: action.foodItem.price * action.foodItem.qty,
            };
            updatedFoodList = [...state.cartList];
            updatedFoodList[existingIndex] = updatedFoodItem;
        }

        return {
            cartList: updatedFoodList,
            totalAmount: updatedTotalAmount,
        };
    }
    if (action.type === "REMOVE") {
        updatedTotalAmount = state.totalAmount - action.foodItem.price;

        let updatedCartList: foodType[];

        if (action.foodItem.qty) {
            let existingIndex = state.cartList.findIndex(
                (ele) => ele.id === action.foodItem.id
            );
            let existingFoodItem = state.cartList[existingIndex];
            let updatedFoodItem = {
                ...existingFoodItem,
                qty: action.foodItem.qty - 1,
            };
            state.cartList[existingIndex] = updatedFoodItem;
            updatedCartList = state.cartList;
        } else {
            updatedCartList = state.cartList.filter(
                (ele) => ele.id !== action.foodItem.id
            );
        }

        return {
            cartList: updatedCartList,
            totalAmount: updatedTotalAmount,
        };
    }

    return defaultCart;
}
