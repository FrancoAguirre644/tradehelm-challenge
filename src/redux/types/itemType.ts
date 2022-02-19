import { Item } from '../../models/models';

export const CREATE_ITEM = 'CREATE_ITEM';
export const GET_ITEMS = 'GET_ITEMS';
export const DELETE_ITEM = 'DELETE_ITEM';

export interface ICreateitem {
    type: typeof CREATE_ITEM;
    payload: Item;
}

export interface IGetItems {
    type: typeof GET_ITEMS;
    payload: Item[];
}

export interface IDeleteItem {
    type: typeof DELETE_ITEM;
    payload: number;
}

export type IItemType = ICreateitem | IGetItems | IDeleteItem;