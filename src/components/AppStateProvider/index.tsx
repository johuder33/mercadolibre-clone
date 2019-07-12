import React, { useReducer } from 'react';
import { AppProvider } from '../../context';
import { appReducer, initialState as defaultState } from './reducer';

export const AppStateProvider: React.FunctionComponent = ({ children, initialState }: any) => {
  const globalState = useReducer(appReducer, initialState || defaultState);
  return (
    <AppProvider value={globalState}>
      {children}
    </AppProvider>
  );
}
