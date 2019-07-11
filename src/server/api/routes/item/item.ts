import request, { Response } from 'request';
import { API_ITEM_URL } from '../../constants';
import { toJSON } from '../../utils';

export const item = (req: any, res: any) => {
  const { id: productId } = req.params;
  request(`${API_ITEM_URL}/${productId}`, (err: any, _: Response, body: any) => {
    if (err) {
      return res.status(400).json({ error: err });
    }

    res.json(toJSON(body));
  });
};
