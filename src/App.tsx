import { FC, useState } from "react";

import Topnav from "./layout/Topnav";
import FoodList from "./layout/FoodList";
import CartModal from "./layout/CartModal";

import CartProvider from "./context/CartProvider";

const App: FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <CartProvider>
            <Topnav setShowModal={setShowModal} />
            {showModal && <CartModal setShowModal={setShowModal} />}
            <main id="hero">
                <FoodList />
            </main>
        </CartProvider>
    );
};
export default App;
