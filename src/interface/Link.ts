interface Link {
  key: string;
  name: string;
  categoryKey: string;
  component?: HTMLElement | string;
  description?: string;
  path?: string;
  icon?: string;
}

type LinkList = Array<Link>;
