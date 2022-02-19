import { Item } from "../../models/models";
import * as types from "../types/itemType";

const initialState: Item[] = [];

const itemReducer = (state: Item[] = initialState, action: types.IItemType): Item[] => {
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

export default itemReducer;