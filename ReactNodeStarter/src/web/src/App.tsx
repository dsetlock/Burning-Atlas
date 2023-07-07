import React, { useReducer, FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout/layout';
import './App.css';
import { DarkTheme } from './ux/theme';
import { AppContext, ApplicationState, getDefaultState } from './models/applicationState';
import appReducer from './reducers/appReducer';
import { DefaultContext } from './components/appContext';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { ThemeProvider } from '@fluentui/react';
import Telemetry from './components/telemetry';

export const App: FC = () => {
    const defaultState: ApplicationState<string> = getDefaultState();
    const [applicationState, dispatch] = useReducer(appReducer, defaultState);
    const initialContext = { state: applicationState, dispatch: dispatch as React.DispatchWithoutAction }

    initializeIcons();

    return (
        <ThemeProvider applyTo="body" theme={DarkTheme}>
            <DefaultContext.Provider value={initialContext}>
                <BrowserRouter>
                    <Telemetry>
                        <Layout />
                    </Telemetry>
                </BrowserRouter>
            </DefaultContext.Provider>
        </ThemeProvider>
    );
};
