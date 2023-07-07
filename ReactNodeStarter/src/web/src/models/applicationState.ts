import { Dispatch } from "react";

export interface AppContext<T> {
    state: ApplicationState<T>;
    dispatch: Dispatch<Action<T>>;
}

export interface ApplicationState<T> {
    items?: T[];
    selectedItem?: T;
}

export interface Action<T> {
    type: string;
    payload?: T;
}

export const getDefaultState = <T>(): ApplicationState<T> => {
    return {
        items: undefined,
        selectedItem: undefined
    };
};