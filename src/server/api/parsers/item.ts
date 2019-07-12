import { getAuthor } from '../utils';
import { getNewDetailBody } from './helpers';
import { Result } from './types';

export const toOwnItemStructure = (item: Result, description: any) => ({
  author: getAuthor(),
  item: {
    ...getNewDetailBody(item),
    description: description.plain_text
  }
});
