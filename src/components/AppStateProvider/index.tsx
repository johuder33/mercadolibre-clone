import React, { useReducer } from 'react';
import { AppProvider } from '../../context';
import { appReducer, initialState } from './reducer';

export const AppStateProvider: React.FunctionComponent = ({ children }) => {
  const globalState = useReducer(appReducer, initialState);
  return (
    <AppProvider value={globalState}>
      {children}
    </AppProvider>
  );
}
