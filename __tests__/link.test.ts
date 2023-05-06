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
  let links = Webord.registerLink({
    key: 'test',
    name: 'Test',
    categoryKey: 'test',
    description: 'Test link',
    path: '/test',
    icon: 'test',
  });

  expect(links).toEqual([
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

  links = Webord.registerLink({
    key: 'test2',
    name: 'Test2',
    categoryKey: 'test',
    description: 'Test link',
    icon: 'test',
  });

  expect(links).toEqual([
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
    Webord.removeLink('test');
    Webord.removeLink('test2');
    Webord.removeCategory('test');
  }).not.toThrow();
});

test('Webord-LinkTree', () => {
  Webord.registerCategory({
    key: 'test',
    name: 'Test',
    description: 'Test category',
    path: '/test-c',
    icon: 'test',
  });

  Webord.registerCategory({
    key: 'test2',
    name: 'Test2',
    description: 'Test category',
    path: '/test2-c',
    icon: 'test',
    categoryKey: 'test',
  });

  Webord.registerCategory({
    key: 'test3',
    name: 'Test3',
    description: 'Test category',
    path: '/test3-c',
    icon: 'test',
  });

  Webord.registerLink({
    key: 'test',
    name: 'Test',
    categoryKey: 'test',
    description: 'Test link',
    component: '<div>Test</div>',
    path: '/test',
    icon: 'test',
  });

  Webord.registerLink({
    key: 'test2',
    name: 'Test2',
    categoryKey: 'test2',
    description: 'Test link',
    component: '<div>Test</div>',
    path: '/test2',
    icon: 'test',
  });

  Webord.registerLink({
    key: 'test3',
    name: 'Test3',
    categoryKey: 'test3',
    description: 'Test link',
    component: '<div>Test</div>',
    path: '/test3',
    icon: 'test',
  });

  let LinkTree = Webord.getNavigationTree();

  expect(LinkTree).toEqual([
    {
      description: 'Test category',
      icon: 'test',
      key: 'test',
      links: [
        {
          categoryKey: 'test',
          component: '<div>Test</div>',
          description: 'Test link',
          icon: 'test',
          key: 'test',
          name: 'Test',
          path: '/test',
        },
      ],
      name: 'Test',
      path: '/test-c',
      subCategorie: [
        {
          categoryKey: 'test',
          description: 'Test category',
          icon: 'test',
          key: 'test2',
          links: [
            {
              categoryKey: 'test2',
              component: '<div>Test</div>',
              description: 'Test link',
              icon: 'test',
              key: 'test2',
              name: 'Test2',
              path: '/test2',
            },
          ],
          name: 'Test2',
          path: '/test2-c',
          subCategorie: [],
        },
      ],
    },
    {
      description: 'Test category',
      icon: 'test',
      key: 'test3',
      links: [
        {
          categoryKey: 'test3',
          component: '<div>Test</div>',
          description: 'Test link',
          icon: 'test',
          key: 'test3',
          name: 'Test3',
          path: '/test3',
        },
      ],
      name: 'Test3',
      path: '/test3-c',
      subCategorie: [],
    },
  ]);
});
