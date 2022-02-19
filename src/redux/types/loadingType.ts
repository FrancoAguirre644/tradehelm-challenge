export const LOADING = 'LOADING';

export interface IChangeLoadingStatus {
    type: typeof LOADING;
    payload: boolean;
}
