import { CONFIG_PREFIX } from '../app.constants';

export const setPrefix = (text): string => `[${ CONFIG_PREFIX }] ${ text }`;
