import { Dispatch } from "react";
/**
 * This file defines the interfaces and functions related to the application state.
 * It exports the `AppContext`, `ApplicationState`, `Action`, and `getDefaultState` interfaces.
 * `AppContext` is a generic interface that defines the shape of the application context object.
 * `ApplicationState` is a generic interface that defines the shape of the application state object.
 * `Action` is a generic interface that defines the shape of the action object.
 * `getDefaultState` is a generic function that returns the default application state object.
 */
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