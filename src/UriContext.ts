import { Context, createContext } from 'react';
import { defaultUri } from './const';
import { UriContextType } from './types';

const defaultValue: UriContextType = {
    uri: defaultUri,
    setUri: () => { },
};

export const UriContext: Context<UriContextType> = createContext(defaultValue);