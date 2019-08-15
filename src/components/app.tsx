import React, {useEffect} from 'react';
import {Provider} from '../ioc.react';
import {appContainer} from './app.ioc';
import {Hello} from './Hello/Hello';
import {Menu} from './Menu/Menu';

// app.tsx
export const App: React.FC = () => {
    return (
        <Provider container={appContainer}>
            <Menu />
        </Provider>
    );
};
