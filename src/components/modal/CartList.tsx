import { foodType } from "../../Types";

import foodList from "../../../data/foodList.json";

function CartList({ data }: { data: foodType }) {
    const foodItem = foodList.find((ele) => ele.id === data.id)!;

    return (
        <div className=" py-4 grid grid-cols-3 font-semibold border-y">
            <div className="grid grid-cols-2 -gap-12">
                <img
                    src={foodItem.image}
                    alt={`Image of ${data.name}`}
                    className="object-cover h-16 w-28 rounded-lg"
                />
                <h1 className="text-xl my-auto">{data.name}</h1>
            </div>
            <span className="text-lg w-fit font-medium mx-12  my-auto">
                &#8377; {foodItem.price}
            </span>
            <div className="grid grid-cols-2 -ml-14">
                <span className="my-auto text-lg">{data.qty}</span>
                <h3 className="my-auto text-lg">&#8377; {data.price}</h3>
            </div>
        </div>
    );
}
export default CartList;
