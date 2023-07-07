import React, { FC, ReactElement } from 'react';

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