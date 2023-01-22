import { fetchCart, fetchUser } from "../utils/fetchLocalStorageData"

const userInfo = fetchUser();
const cartInfo = fetchCart();

export const initialState = {
    user: userInfo,
    foodItems: null,
    subscribe: null,
    cartShow: false,
    cartItems: cartInfo,
}