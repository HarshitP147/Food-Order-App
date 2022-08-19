import { useContext } from "react";

import CartContext from "../../context/CartContext";

export default function ModalFooter({
    totalItems,
    totalAmount,
    setShowModal,
}: {
    totalItems: number;
    totalAmount: number;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const { cartList } = useContext(CartContext);

    const orderFood = () => {
        setShowModal(false);
        console.log("Food items you have ordered:");
        console.table(cartList);
    };

    return (
        <div className="py-4 flex border-t-2 justify-around align-middle">
            <div className="flex mx-3 my-auto justify-evenly">
                <h3 className="text-2xl">Total Food items:</h3>
                <h3 className="text-2xl">{totalItems}</h3>
            </div>
            <div className="flex mx-3 my-auto justify-evenly">
                <h3 className="text-2xl">Total Amount:</h3>
                <h3 className="text-2xl">&#8377;{totalAmount}</h3>
            </div>
            <div className="ml-auto gap-3">
                <button
                    className="text-red-600 p-2 mr-3 rounded-md transition-colors hover:bg-red-600 hover:text-white"
                    onClick={() => setShowModal(false)}
                >
                    Close
                </button>
                <button
                    className="text-orange-600 p-2 ml-2 rounded-md transition-colors hover:bg-orange-600 hover:text-white"
                    onClick={orderFood}
                >
                    Order now
                </button>
            </div>
        </div>
    );
}
