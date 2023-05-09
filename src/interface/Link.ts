import React = require('react');

export interface Link {
  key: string;
  name: string;
  categoryKey: string;
  component?: any;
  description?: string;
  path?: string;
  icon?: string;
}

export type LinkList = Array<Link>;
