import React from 'react';
import {useInjection} from '../../../ioc.react';
import {Logger} from '../../../logger';

export const MenuItem: React.FC = () => {
    const logger = useInjection<Logger>(Logger);

    logger.log('Сообщение');

    return <h1>hi</h1>;
};
