interface foodData {
    id: number;
    name: string;
    image: string;
    price: number;
    spicy: boolean;
}

interface foodType {
    id: number;
    name: string;
    qty: number;
    price: number;
}

interface State {
    cartList: foodType[];
    totalAmount: number;
}

type Action = {
    type: "ADD" | "REMOVE";
    foodItem: foodType;
};

type cartType = {
    cartList: foodType[];
    totalAmount: number;
    addFoodCart: (item: foodType) => void;
    removeFoodCart: (item: foodType) => void;
};
export default cartType;

export type { foodData, foodType, State, Action };
