import React = require('react');

export interface Link {
  key: string;
  name: string;
  categoryKey: string;
  component?: HTMLElement | string | React.DetailedReactHTMLElement<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  description?: string;
  path?: string;
  icon?: string;
}

export type LinkList = Array<Link>;
