import { FC, useContext } from "react";

import { foodType, foodData } from "../Types";

import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid";

import CartContext from "../context/CartContext";

type propTypes = {
    data: foodData;
    quantity: number;
    setQuantity: React.Dispatch<React.SetStateAction<number>>;
};

const Controls: FC<propTypes> = ({ data, quantity, setQuantity }) => {
    const { addFoodCart, removeFoodCart } = useContext(CartContext);

    function addItem(item: foodData) {
        setQuantity((amt) => amt + 1);
        const foodItem: foodType = {
            id: item.id,
            name: item.name,
            qty: quantity + 1,
            price: item.price,
        };
        addFoodCart(foodItem);
    }

    function removeItem(item: foodData) {
        const foodItem: foodType = {
            id: item.id,
            name: item.name,
            qty: quantity,
            price: item.price,
        };
        removeFoodCart(foodItem);
        setQuantity((amt) => amt - 1);
    }

    return (
        <div className="text-center flex justify-around">
            <button
                className="py-2 w-full bg-blue-600 hover:bg-blue-700 rounded-l-md transition-colors"
                onClick={() => removeItem(data)}
            >
                <MinusSmIcon className="h-6 mx-auto fill-white" />
            </button>
            <span className="mx-20 py-2 w-[25%]">{quantity}</span>
            <button
                className="py-2 w-full bg-blue-600 hover:bg-blue-700 rounded-r-md transition-colors"
                onClick={() => addItem(data)}
            >
                <PlusSmIcon className="h-6 mx-auto fill-white" />
            </button>
        </div>
    );
};
export default Controls;
