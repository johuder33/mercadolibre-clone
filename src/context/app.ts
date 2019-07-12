import { createContext } from 'react';

const AppContext = createContext<any>(null);
const { Provider: AppProvider, Consumer: AppConsumer } = AppContext;
export { AppProvider, AppConsumer, AppContext };
