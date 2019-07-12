export const IS_LOADING = 'IS_LOADING';

export const loadingReducer = (state: any, { payload }: any) => {
  const { loading } = payload;
  return { ...state, loading };
}
