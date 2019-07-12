export const ADD_PRODUCT = 'ADD_PRODUCT';

export const addProductHandler = (state: any, { payload }: any) => {
  const ids = payload.items.map(({id}: any) => id);
  const byIds = payload.items.reduce((map: any, item: any) => {
    const { id } = item;
    map[id] = item;
    return map;
  }, {});
  return { ...state, ids, byIds };
}
