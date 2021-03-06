import { Events, DEFAULT } from './events';

const initialState = {
  byIds: {},
  ids: [],
  loading: false
};

const appReducer = (state = initialState, action: any) => {
  const { type } = action;
  const handler = Events[type] || Events[DEFAULT];
  return handler(state, action);
}

export { appReducer, initialState };
