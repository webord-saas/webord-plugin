import { LinkList } from './Link';

export interface Category {
  key: string;
  name: string;
  path: string;
  description?: string;
  icon?: string;
  categoryKey?: string;
  links?: LinkList;
}

export type CategoryList = Array<Category>;
