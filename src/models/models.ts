import rootReducer from '../redux/reducers/index';

export type RootStore = ReturnType<typeof rootReducer>

export interface Item {
    id?: number;
    description: string;
}
