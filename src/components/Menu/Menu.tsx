import React from 'react';

import {menuContainer} from './menu.ioc';
import {Provider} from '../../ioc.react';
import {MenuItem} from './MenuItem/MenuItem';

export const Menu: React.FC = () => {
    return (
        <Provider container={menuContainer}>
            <MenuItem />
        </Provider>
    );
};
