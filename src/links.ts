import { Category, CategoryList } from './interface/Category';
import { Link, LinkList } from './interface/Link';

export let Links = {
  /**
   * @param {string} key
   * @param {string} name
   * @param {string} description (optional)
   * @param {string} path
   * @param {string} icon (optional)
   * @param {string} categoryKey (optional)
   */
  categories: <CategoryList>[],

  registerCategory(category: Category) {
    if (!category.key) {
      throw new Error('Category key is required');
    }
    if (!category.name) {
      throw new Error('Category name is required');
    }
    if (!category.path) {
      throw new Error('Category path is required');
    }

    if (this.categories.find((c) => c.key === category.key)) {
      throw new Error('Category key already exists');
    }

    if (category.categoryKey) {
      const parent = this.categories.find((c) => c.key === category.categoryKey);
      if (!parent) {
        throw new Error('Category parent not found');
      }
    }

    this.categories.push(category);

    return this.categories;
  },

  updateCategory(category: Category) {
    const index = this.categories.findIndex((c) => c.key === category.key);
    if (index === -1) {
      throw new Error('Category not found');
    }
    this.categories[index] = category;

    return this.categories;
  },

  removeCategory(categoryKey: string) {
    const index = this.categories.findIndex((c) => c.key === categoryKey);
    if (index === -1) {
      throw new Error('Category not found');
    }
    this.categories.splice(index, 1);

    return this.categories;
  },

  /**
   * @param {string} key
   * @param {string} name
   * @param {string} description (optional)
   * @param {string} path (optional)
   * @param {string} icon (optional)
   * @param {string} categoryKey
   */
  links: <LinkList>[],

  registerLink(link: Link) {
    if (!link.key) {
      throw new Error('Link key is required');
    }
    if (!link.name) {
      throw new Error('Link name is required');
    }
    if (!link.categoryKey) {
      throw new Error('Link categoryKey is required');
    }
    if (!link.path) {
      link.path = '/' + link.key;
    }

    if (this.links.find((l) => l.key === link.key)) {
      throw new Error('Link key already exists');
    }

    if (!this.categories.find((c) => c.key === link.categoryKey)) {
      throw new Error('Link category not found');
    }

    this.links.push(link);

    return this.links;
  },

  updateLink(link: Link) {
    const index = this.links.findIndex((l) => l.key === link.key);
    if (index === -1) {
      throw new Error('Link not found');
    }
    this.links[index] = link;

    return this.links;
  },

  removeLink(linkKey: string) {
    const index = this.links.findIndex((l) => l.key === linkKey);
    if (index === -1) {
      return;
    }
    this.links.splice(index, 1);

    return this.links;
  },

  getLinkByPath(path: string) {
    return this.links.find((l) => l.path === path);
  },

  // Navigation

  getLinkTree() {
    let tree: object[] = [];

    this.categories
      .filter((category) => !category.categoryKey)
      .forEach((category) => {
        let categoryTree = this.getRecursiveCategory(category.key);
        tree.push(categoryTree);
      });

    return tree;
  },

  getRecursiveCategory(categoryKey: string): object {
    let category = this.categories.find((c) => c.key === categoryKey);
    let subCategorie: object[] = [];

    if (!category) {
      throw new Error('Category not found');
    }

    this.categories
      .filter((c) => c.categoryKey === categoryKey)
      .forEach((c) => {
        let subCategoryTree = this.getRecursiveCategory(c.key);

        subCategorie.push(subCategoryTree);
      });

    let links = this.links.filter((l) => l.categoryKey === categoryKey);

    category.links = links;

    return { ...category, subCategorie };
  },
};
