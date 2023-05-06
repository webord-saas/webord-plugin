interface Link {
  key: string;
  name: string;
  categoryKey: string;
  description?: string;
  path?: string;
  icon?: string;
}

type LinkList = Array<Link>;
