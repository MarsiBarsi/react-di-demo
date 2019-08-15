import React from 'react';
import {useInjection, Provider} from '../../ioc.react';
import {Logger} from '../../logger';

export const Hello: React.FC = () => {
    const logger = useInjection<Logger>(Logger);

    logger.log('лог из дочернего компонента');

    return <h1>Всем привет!</h1>;
};
