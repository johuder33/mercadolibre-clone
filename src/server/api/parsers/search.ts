import { getAuthor } from '../utils';

interface MercadoLibreResponse {
  results: Result[];
  filters: any[];
}

interface Result {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  thumbnail: string;
  shipping: {
    free_shipping: boolean;
  }
  condition: string;
}

const getNewResultBody = ({ id,
  title,
  price: amount,
  currency_id: currency,
  thumbnail: picture,
  shipping: {
    free_shipping
  },
  condition }: Result) => ({
  id,
  title,
  price: {
    amount,
    currency,
    decimals: 0
  },
  picture,
  condition,
  free_shipping
})

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
