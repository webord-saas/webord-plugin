import { Webord } from '../src/index';

test('Webord-Link', () => {
  // Create a category

  Webord.registerCategory({
    key: 'test',
    name: 'Test',
    description: 'Test category',
    path: '/test',
    icon: 'test',
  });

  // Create a link
  Webord.registerLink({
    key: 'test',
    name: 'Test',
    categoryKey: 'test',
    description: 'Test link',
    path: '/test',
    icon: 'test',
  });

  expect(Webord.links).toEqual([
    {
      key: 'test',
      name: 'Test',
      categoryKey: 'test',
      description: 'Test link',
      path: '/test',
      icon: 'test',
    },
  ]);

  // Create a new link with duplicate key
  expect(() => {
    Webord.registerLink({
      key: 'test',
      name: 'Test',
      categoryKey: 'test',
      description: 'Test link',
      path: '/test',
      icon: 'test',
    });
  }).toThrow('Link key already exists');

  // Create a new link with invalid category
  expect(() => {
    Webord.registerLink({
      key: 'test2',
      name: 'Test2',
      categoryKey: 'test3',
      description: 'Test link',
      path: '/test2',
      icon: 'test',
    });
  }).toThrow('Link category not found');

  Webord.registerLink({
    key: 'test2',
    name: 'Test2',
    categoryKey: 'test',
    description: 'Test link',
    icon: 'test',
  });

  expect(Webord.links).toEqual([
    {
      key: 'test',
      name: 'Test',
      categoryKey: 'test',
      description: 'Test link',
      path: '/test',
      icon: 'test',
    },
    {
      key: 'test2',
      name: 'Test2',
      categoryKey: 'test',
      description: 'Test link',
      icon: 'test',
      path: '/test2',
    },
  ]);

  // Update a link
  expect(() => {
    Webord.updateLink({
      key: 'test2',
      name: 'Test2',
      categoryKey: 'test',
      description: 'Test link',
      path: '/test2',
      icon: 'test',
    });
  }).not.toThrow();

  // Delete a link
  expect(() => {
    Webord.removeLink('test2');
  }).not.toThrow();
});
