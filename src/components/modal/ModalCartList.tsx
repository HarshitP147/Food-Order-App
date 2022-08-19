import CartList from "./CartList";

import { foodType } from "../../Types";

export default function ModalCartList({ cartList }: { cartList: foodType[] }) {
    return (
        <>
            <div className="flex justify-evenly font-bold border-b-2 py-3">
                <h1 className="text-2xl">Food name</h1>
                <h1 className="text-2xl">Base Price</h1>
                <h1 className="text-2xl">Quantity</h1>
                <h1 className="text-2xl">Final Price</h1>
            </div>
            <div className="h-64 overflow-scoll mx-auto">
                {cartList.map((ele) => (
                    <CartList key={ele.id} data={ele} />
                ))}
            </div>
        </>
    );
}
