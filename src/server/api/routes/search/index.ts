import request, { Response } from 'request';
import { API_SEARCH_URL } from '../../constants';
import { toJSON } from '../../utils';
import { getOwnStructureResponse } from '../../parsers/search';

export const search = (req: any, res: any) => {
  const { q: query } = req.query;
  request(`${API_SEARCH_URL}?q=${query}&offset=0&limit=4`, (err: any, _: Response, body: any) => {
    if (err) {
      return res.status(400).json({ error: err });
    }

    res.json(getOwnStructureResponse(toJSON(body)));
  });
};
