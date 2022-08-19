import { useContext } from "react";
import { ShoppingCartIcon } from "@heroicons/react/solid";

import CartContext from "../context/CartContext";

function Topnav({
    setShowModal,
}: {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const { cartList } = useContext(CartContext);

    const numberOfItems = cartList.reduce((current, item) => {
        return current + item.qty;
    }, 0);

    return (
        <nav className="bg-black text-white flex flex-col md:flex-row justify-between align-middle px-20 py-5">
            <h1 className="text-4xl mb-6 md:mb-0 text-center">
                Food Order App
            </h1>
            <button
                className="transition-colors border-[0.25px] relative hover:bg-white hover:text-black p-3 flex justify-around align-middle rounded-md"
                onClick={() => setShowModal(true)}
            >
                <ShoppingCartIcon className="h-7 w-7 mr-2" />
                <span>Cart</span>
                <div className="absolute h-6 w-6 -bottom-2 -right-2 rounded-full text-white bg-red-600">
                    {numberOfItems}
                </div>
            </button>
        </nav>
    );
}
export default Topnav;
