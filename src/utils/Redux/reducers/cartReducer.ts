import {
    REMOVE_ITEM,
    ADD_ITEM,
    INCREASE_ITEM,
    DECREASE_ITEM
} from "../actionTypes";

const initialCartState = {
    items: {},
    total: 0
};

export default function (state = initialCartState, action) {
    const { payload, type } = action;
    const newState = { ...state };
    switch (type) {
        case ADD_ITEM: {
            const { item } = payload;
            if (newState.items[item.id].cantidad > 0) {
                newState.items[item.id].cantidad++;
            } else {
                newState.items[item.id].cantidad = 1;
                newState.items[item.id].precio = item.precio;
            }
            newState.total += newState.items[item.id].precio;
            return newState;
        }
        case REMOVE_ITEM: {
            const { itemId } = payload;
            delete newState.items[itemId];
            newState.total -=
                newState.items[itemId].precio * newState.items[itemId].cantidad;
            return newState;
        }
        case INCREASE_ITEM: {
            const { itemId } = payload;
            newState.items[itemId].cantidad++;
            newState.total += newState.items[itemId].precio;
            return newState;
        }
        case DECREASE_ITEM: {
            const { itemId } = payload;
            newState.items[itemId].cantidad--;
            newState.total -= newState.items[itemId].precio;
            if (newState.items[itemId].cantidad === 0) {
                delete newState.items[itemId];
            }
            return newState;
        }
        default: {
            return newState;
        }
    }
}
