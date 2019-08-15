import React, {useContext} from 'react';
import {Container, interfaces} from 'inversify';

interface WithContainer {
    container: Container;
}

const InversifyContext = React.createContext<{container: Container | null}>({container: null});

export const Provider: React.FC<WithContainer> = props => {
    return <InversifyContext.Provider value={{container: props.container}}>{props.children}</InversifyContext.Provider>;
};

export function useInjection<T>(token: interfaces.ServiceIdentifier<T>): T {
    const {container} = useContext(InversifyContext);

    if (!container) {
        throw new Error('IoC-container was not found');
    }

    return container.get(token);
}
