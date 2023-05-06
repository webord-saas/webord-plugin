import { Link } from './links';

export let Webord = {
  // Links

  /**
   * @param {string} key
   * @param {string} name
   * @param {string} path
   * @param {string} description (optional)
   * @param {string} icon (optional)
   * @param {string} categoryKey (optional)
   * @returns
   * @memberof Category
   * @example
   * Webord.registerCategory({
   *  key: 'test',
   *  name: 'Test',
   *  description: 'Test category',
   *  path: '/test',
   *  icon: 'test',
   * });
   * */
  registerCategory: (category: Category) => Link.registerCategory(category),

  /**
   * @param {string} key
   * @param {string} name
   * @param {string} path
   * @param {string} description (optional)
   * @param {string} icon (optional)
   * @param {string} categoryKey (optional)
   * @returns
   * @memberof Category
   * @example
   * Webord.updateCategory({
   *  key: 'test',
   *  name: 'Test',
   *  description: 'Test category',
   *  path: '/test',
   *  icon: 'test',
   * });
   * */
  updateCategory: (category: Category) => Link.updateCategory(category),

  /**
   * @param {string} key
   * @memberof Category
   * @example
   * Webord.removeCategory('test');
   * */
  removeCategory: (key: string) => Link.removeCategory(key),

  /**
   * @param {string} key
   * @param {string} name
   * @param {string} description (optional)
   * @param {string} path (optional)
   * @param {string} icon (optional)
   * @param {string} categoryKey (optional)
   * @returns
   * @memberof Link
   * @example
   * Link.registerLink({
   *  key: 'test',
   *  name: 'Test',
   *  description: 'Test link',
   *  path: '/test',
   *  icon: 'test',
   *  categoryKey: 'test',
   * });
   *  */
  registerLink: (link: Link) => Link.registerLink(link),

  /**
   * @param {string} key
   * @param {string} name
   * @param {string} description (optional)
   * @param {string} path (optional)
   * @param {string} icon (optional)
   * @param {string} categoryKey (optional)
   * @returns
   * @memberof Link
   * @example
   * Link.updateLink({
   *  key: 'test',
   *  name: 'Test',
   *  description: 'Test link',
   *  path: '/test',
   *  icon: 'test',
   *  categoryKey: 'test',
   * });
   * */
  updateLink: (link: Link) => Link.updateLink(link),

  /**
   * @param {string} key
   * @memberof Link
   * @example
   * Link.removeLink('test');
   * */
  removeLink: (key: string) => Link.removeLink(key),

  // Custom Actions

  action: <any>{},

  /**
   * @param {string} name
   * @param {(...args: any[]) => any} exec
   * @memberof Webord
   * @example
   * Webord.registerAction({
   *  name: 'test',
   *  exec: (foo) => {
   *    console.log(`Hello ${foo}!`);
   *  },
   * });
   * */
  registerAction(action: { name: string; exec: (...args: any[]) => any }) {
    if (!action.name) {
      throw new Error('Action name is required');
    }
    if (!action.exec) {
      throw new Error('Action exec is required');
    }

    if (this.action[action.name]) {
      throw new Error('Action name already exists');
    }

    this.action[action.name] = action.exec;
  },

  /**
   * @param {string} name
   * @param {...any[]} args
   * @returns
   * @memberof Webord
   * @example
   * Webord.useAction('test', 'World');
   * */
  useAction(actionName: string, ...args: any[]) {
    if (!this.action[actionName]) {
      throw new Error('Action not found');
    }

    return this.action[actionName](...args);
  },
};
