import {Container} from 'inversify';
import {Logger} from '../logger';

// app.ioc.ts
export const appContainer = new Container();

appContainer.bind<Logger>(Logger).toSelf();
