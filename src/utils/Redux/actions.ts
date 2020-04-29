import {
    ADD_ITEM,
    REMOVE_ITEM,
    INCREASE_ITEM,
    DECREASE_ITEM,
    SET_PRODUCTS,
    SET_BRANDS
} from "./actionTypes";

export const addItem = item => ({
    type: ADD_ITEM,
    payload: {
        item
    }
});

export const removeItem = itemId => ({
    type: REMOVE_ITEM,
    payload: {
        itemId
    }
});

export const increaseItem = itemId => ({
    type: INCREASE_ITEM,
    payload: {
        itemId
    }
});

export const decreaseItem = itemId => ({
    type: DECREASE_ITEM,
    payload: {
        itemId
    }
});

export const setProducts = products => ({
    type: SET_PRODUCTS,
    payload: {
        products
    }
});

export const setBrands = brands => ({
    type: SET_BRANDS,
    payload: {
        brands
    }
});
