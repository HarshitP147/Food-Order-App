import { useContext } from "react";

import ModalFooter from "./modal/ModalFooter";
import ModalCartList from "./modal/ModalCartList";

import CartContext from "../context/CartContext";

export default function ModalBox({
    setShowModal,
}: {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const { cartList, totalAmount } = useContext(CartContext);

    const numberOfItems = cartList.reduce((current, item) => {
        return current + item.qty;
    }, 0);

    return (
        <div className="bg-white rounded-lg px-9 w-[80%] mx-auto">
            {cartList.length ? (
                <ModalCartList cartList={cartList} />
            ) : (
                <div className="py-4 ">
                    <h1 className="text-center text-2xl">
                        Your cart is empty! Order some tasty food!!
                    </h1>
                </div>
            )}
            <ModalFooter
                totalItems={numberOfItems}
                totalAmount={totalAmount}
                setShowModal={setShowModal}
            />
        </div>
    );
}
