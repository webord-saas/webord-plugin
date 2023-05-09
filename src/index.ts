import { Actions } from './actions';
import { Links } from './links';

import { Category } from './interface/Category';
import { Link } from './interface/Link';

let Webord = {
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
  registerCategory(category: Category) {
    return Links.registerCategory(category);
  },

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
  updateCategory(category: Category) {
    return Links.updateCategory(category);
  },

  /**
   * @param {string} key
   * @memberof Category
   * @example
   * Webord.removeCategory('test');
   * */
  removeCategory(key: string) {
    return Links.removeCategory(key);
  },

  /**
   * @param {string} key
   * @param {string} name
   * @param {string} categoryKey
   * @param {Element} component
   * @param {string} description (optional)
   * @param {string} path (optional)
   * @param {string} icon (optional)
   * @returns
   * @memberof Link
   * @example
   * Link.registerLink({
   *  key: 'test',
   *  name: 'Test',
   *  description: 'Test link',
   *  component: TestComponent,
   *  path: '/test',
   *  icon: 'test',
   *  categoryKey: 'test',
   * });
   *  */
  registerLink(link: Link) {
    return Links.registerLink(link);
  },

  /**
   * @param {string} key
   * @param {string} name
   * @param {string} categoryKey
   * @param {Element} component
   * @param {string} description (optional)
   * @param {string} path (optional)
   * @param {string} icon (optional)
   * @returns
   * @memberof Link
   * @example
   * Link.updateLink({
   *  key: 'test',
   *  name: 'Test',
   *  description: 'Test link',
   *  component: TestComponent,
   *  path: '/test',
   *  icon: 'test',
   *  categoryKey: 'test',
   * });
   * */
  updateLink(link: Link) {
    return Links.updateLink(link);
  },

  /**
   * @param {string} key
   * @memberof Link
   * @example
   * Link.removeLink('test');
   * */
  removeLink(key: string) {
    return Links.removeLink(key);
  },

  getNavigationTree() {
    return Links.getLinkTree();
  },

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
    return Actions.registerAction(action);
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
    return Actions.useAction(actionName, ...args);
  },
};

declare const window: any;
if (typeof window !== 'undefined') {
  window.WebordPlugin = Webord;
}

export default Webord;
