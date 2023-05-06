interface Category {
  key: string;
  name: string;
  path: string;
  description?: string;
  icon?: string;
  categoryKey?: string;
}

type CategoryList = Array<Category>;
