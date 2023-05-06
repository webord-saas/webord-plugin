interface Category {
  key: string;
  name: string;
  path: string;
  description?: string;
  icon?: string;
  categoryKey?: string;
  links?: LinkList;
}

type CategoryList = Array<Category>;
