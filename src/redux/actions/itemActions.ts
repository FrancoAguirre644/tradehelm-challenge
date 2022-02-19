import { Dispatch } from 'redux';
import { Item } from '../../models/models';
import { IItemType, CREATE_ITEM, GET_ITEMS, DELETE_ITEM } from '../types/itemType';
import { IChangeLoadingStatus, LOADING } from '../types/loadingType';

export const createItem = (item: Item) => (dispatch: Dispatch<IItemType | IChangeLoadingStatus>) => {
    try {

        dispatch({ type: LOADING, payload: true });

        window.setTimeout(function() {

            dispatch({
                type: CREATE_ITEM,
                payload: { ...item, id: +new Date() }
            });
    
            dispatch({ type: LOADING, payload: false });

        }, 500);

    } catch (err: any) {
        console.log(err);
    }
}

export const getItems = () => (dispatch: Dispatch<IItemType | IChangeLoadingStatus>) => {
    try {

        dispatch({ type: LOADING, payload: true });

        const items = JSON.parse(localStorage.getItem('items')!) || [];
        
        dispatch({
            type: GET_ITEMS,
            payload: items
        })

        dispatch({ type: LOADING, payload: false });

    } catch (err: any) {
        console.log(err);
    }
}

export const deleteItem = (id: number) => (dispatch: Dispatch<IItemType | IChangeLoadingStatus>) => {
    try {

        dispatch({ type: LOADING, payload: true });

        window.setTimeout(function() {

            dispatch({
                type: DELETE_ITEM,
                payload: id
            });
    
            dispatch({ type: LOADING, payload: false });

        }, 500);

    } catch (err: any) {
        console.log(err);
    }
}
