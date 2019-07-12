export const SEARCH_PRODUCT = "SEARCH_PRODUCT";

export const searchProductReducer = (state: any, { payload }: any) => {
  const { search } = payload;
  return { ...state, lastSearch: search };
}
