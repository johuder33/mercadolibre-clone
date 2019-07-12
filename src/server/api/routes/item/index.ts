import request, { Response } from 'request';
import { API_ITEM_URL } from '../../constants';
import { toJSON } from '../../utils';
import { toOwnItemStructure } from '../../parsers/item';

const getFullProductInfo = (id: string) => new Promise((resolve, reject) => {
  request(`${API_ITEM_URL}/${id}`, (err: any, _: Response, body: any) => {
    if (err) {
      return reject({ error: err });
    }

    request(`${API_ITEM_URL}/${id}/description`, (err: any, _: Response, description: any) => {
      if (err) {
        return reject({ error: err });
      }

      resolve({ item: toJSON(body), description: toJSON(description) });
    });
  });
});

export const item = (req: any, res: any) => {
  const { id: productId } = req.params;

  getFullProductInfo(productId).then(({ item, description }: any) => {
    const product = toOwnItemStructure(item, description);
    res.json(product);
  }).catch(error => res.status(400).json(error));
};
