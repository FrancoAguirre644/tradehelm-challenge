import { Item } from "../../models/models";
import * as types from "../types/itemType";

const initialState: Item[] = [
    {
        id: 1,
        description: '#Product 1'
    },
    {
        id: 2,
        description: '#Product 2'
    },
    {
        id: 3,
        description: '#Product 3'
    },
    {
        id: 4,
        description: '#Product 4'
    }
];

const categoryReducer = (state: Item[] = initialState, action: types.IitemType): Item[] => {
    switch (action.type) {
        case types.CREATE_ITEM:
            return [action.payload, ...state];

        case types.GET_ITEMS:
            return action.payload;

        case types.DELETE_ITEM:
            return state.filter(item => item.id !== action.payload);

        default:
            return state;
    }
}

export default categoryReducer;