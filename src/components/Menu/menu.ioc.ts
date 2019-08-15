import {appContainer} from '../app.ioc';
import {MenuLogger} from './MenuLogger';
import {Logger} from '../../logger';

// menu.ioc.ts
export const menuContainer = appContainer.createChild();

menuContainer.bind(Logger).to(MenuLogger);
