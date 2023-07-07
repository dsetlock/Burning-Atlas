import { createContext } from 'react';

type ContextProps = {
    // Define any necessary properties for the context
};

const initialState: ContextProps = {
    // Define the initial state for the context
};

const dispatch = () => {
    // Define the dispatch function for the context
};

export const DefaultContext = createContext<{ state: ContextProps, dispatch: () => void }>({ state: initialState, dispatch: dispatch });