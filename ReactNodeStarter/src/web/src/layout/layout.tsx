import React, { FC, ReactElement } from 'react';
import { Stack } from '@fluentui/react/lib/Stack';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Sidebar from './sidebar';
import Header from './header';
import { headerStackStyles, mainStackStyles, rootStackStyles, sidebarStackStyles } from '../ux/styles';

type LayoutProps = {
    // Add any necessary props for the starter component
};

const Layout: FC<LayoutProps> = (props: LayoutProps): ReactElement => {
    const navigate = useNavigate();

    const onListCreated = async (list: any) => {
        // Add any necessary functionality for the starter component
    }

    const onItemEdited = (item: any) => {
        // Add any necessary functionality for the starter component
    }

    const onItemEditCancel = () => {
        // Add any necessary functionality for the starter component
    }

    return (
        <Stack styles={rootStackStyles}>
            <Stack.Item styles={headerStackStyles}>
                <Header></Header>
            </Stack.Item>
            <Stack horizontal grow={1}>
                <Stack.Item styles={sidebarStackStyles}>
                    <Sidebar
                        // Add any necessary props for the starter component
                        onItemCreate={onListCreated} />
                </Stack.Item>
                <Stack.Item grow={1} styles={mainStackStyles}>
                    <Routes>
                        // Add any necessary routes for the starter component
                    </Routes>
                </Stack.Item>
                <Stack.Item styles={sidebarStackStyles}>
                    // Add any necessary components for the starter component
                </Stack.Item>
            </Stack>
        </Stack>
    );
};

export default Layout;