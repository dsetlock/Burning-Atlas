import React, { FC, ReactElement } from 'react';
/**
 * Renders a sidebar with a list of items and an optional button to add new items.
 * 
 * @param items An optional array of objects representing the items to display in the sidebar.
 * @param selectedItem An optional object representing the currently selected item.
 * @param onItemCreate An optional function to handle the creation of new items.
 */
type SidebarProps = {
    items?: { name: string, url: string }[];
    selectedItem?: { name: string, url: string };
    onItemCreate?: (item: { name: string, url: string }) => void;
};

const Sidebar: FC<SidebarProps> = (props: SidebarProps): ReactElement => {
    return (
        <div>
            <ul>
                {props.items?.map((item, index) => (
                    <li key={index}>
                        <a href={item.url}>{item.name}</a>
                    </li>
                ))}
                {props.onItemCreate && (
                    <li>
                        <button onClick={() => props.onItemCreate?.({ name: 'New Item', url: '#' })}>
                            Add Item
                        </button>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Sidebar;