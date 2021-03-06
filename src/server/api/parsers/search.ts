import { getAuthor } from '../utils';
import { MercadoLibreResponse } from './types';
import { getNewResultBody } from './helpers';

export const getOwnStructureResponse = (response: MercadoLibreResponse) => {
  const { results, filters } = response;
  const items = results.map(getNewResultBody);
  let categories = filters.filter(({ id }) => id === 'category').reduce((all, category) => {
    const { values } = category;
    if (Array.isArray(values)) {
      values.forEach(({ path_from_root }) => {
        if (Array.isArray(path_from_root)) {
          path_from_root.forEach(item => all.push(item.name));
        }
      })
    }
    return all;
  }, []);

  return {
    author: getAuthor(),
    categories,
    items
  }
};
