import { SET_PRODUCTS, SET_BRANDS } from "../actionTypes";

const initialProductsState = {
    list: {},
    brandList: {}
};

export default function (state = initialProductsState, action) {
    const { payload, type } = action;
    const newState = { ...state };
    switch (type) {
        case SET_PRODUCTS: {
            const { products } = payload;
            newState.list = products;
            return newState;
        }

        case SET_BRANDS: {
            const { brands } = payload;
            newState.brandList = brands;
            return newState;
        }

        default: {
            return newState;
        }
    }
}
