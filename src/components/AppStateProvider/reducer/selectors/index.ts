export const getProducts = (state: any) => state.ids.map((id: string) => state.byIds[id]);
export const isLoading = (state: any) => state.loading;
export const getProduct = (state: any, id: string) => state.byIds[id];
