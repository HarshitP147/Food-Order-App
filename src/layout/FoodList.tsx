import foodList from "../../data/foodList.json";

import FoodCard from "../components/FoodCard";

const FoodList = () => {
    return (
        <div className="border-white px-12 md:px-[5rem] py-8 grid gap-4 md:grid-cols-2">
            {foodList.map((ele) => (
                <FoodCard key={ele.id} data={ele} />
            ))}
        </div>
    );
};
export default FoodList;
