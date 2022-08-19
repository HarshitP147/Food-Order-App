import { useState, useEffect, useContext } from "react";

import { foodType, foodData } from "../Types";

import Chilli from "./Chilli";

import CartContext from "../context/CartContext";
import Controls from "./ControlButton";

function FoodCard({ data }: { data: foodData }) {
    const { id, image, name, price, spicy } = data;

    const [show, setShow] = useState<boolean>(false);
    const [quantity, setQuantity] = useState<number>(0);

    const { addFoodCart } = useContext(CartContext);

    function buttonToggle() {
        setQuantity((amt) => amt + 1);
        const dataItem: foodType = {
            id: id,
            name: name,
            qty: 1,
            price: price,
        };
        addFoodCart(dataItem);
        setShow(true);
    }

    useEffect(() => {
        if (quantity <= 0) {
            setShow(false);
        }
    }, [quantity]);

    return (
        <div className="bg-white rounded-lg p-4">
            <img
                src={image}
                alt={`Image of ${name}`}
                className="h-[20rem] pt-1 w-[100%] rounded-lg object-cover"
            />
            <div className="py-3 flex justify-between">
                <span className="text-lg">{name}</span>
                {spicy && <Chilli />}
                <span className="text-lg">&#8377;{price}</span>
            </div>
            {show ? (
                <Controls
                    key={id}
                    data={data}
                    quantity={quantity}
                    setQuantity={setQuantity}
                />
            ) : (
                <button className="add-button" onClick={buttonToggle}>
                    Add Item
                </button>
            )}
        </div>
    );
}
export default FoodCard;
