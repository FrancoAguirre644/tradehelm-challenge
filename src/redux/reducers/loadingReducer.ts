import { IChangeLoadingStatus, LOADING } from "../types/loadingType";

const initialState = false;

const loadingReducer = (state = initialState, action: IChangeLoadingStatus) => {
    switch (action.type) {
        case LOADING:
            return action.payload;
        default:
            return state;
    }
}

export default loadingReducer;