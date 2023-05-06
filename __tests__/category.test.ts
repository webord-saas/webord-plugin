import { Webord } from '../src/index';

test('Webord-Category', () => {
  // Create a category

  expect(
    Webord.registerCategory({
      key: 'test',
      name: 'Test',
      description: 'Test category',
      path: '/test',
      icon: 'test',
    }),
  ).toEqual([
    {
      key: 'test',
      name: 'Test',
      description: 'Test category',
      path: '/test',
      icon: 'test',
    },
  ]);

  // Create a new category with duplicate key

  expect(() => {
    Webord.registerCategory({
      key: 'test',
      name: 'Test',
      description: 'Test category',
      path: '/test',
      icon: 'test',
    });
  }).toThrow('Category key already exists');

  // Create a new category with invalid parent
  expect(() => {
    Webord.registerCategory({
      key: 'test2',
      name: 'Test2',
      description: 'Test category',
      path: '/test2',
      icon: 'test',
      categoryKey: 'test3',
    });
  }).toThrow('Category parent not found');

  // Update a category with valid parent
  expect(
    Webord.registerCategory({
      key: 'test2',
      name: 'Test2',
      description: 'Test category',
      path: '/test2',
      icon: 'test',
      categoryKey: 'test',
    }),
  ).toEqual([
    { description: 'Test category', icon: 'test', key: 'test', name: 'Test', path: '/test' },
    { categoryKey: 'test', description: 'Test category', icon: 'test', key: 'test2', name: 'Test2', path: '/test2' },
  ]);

  // Update a category

  expect(
    Webord.updateCategory({
      key: 'test',
      name: 'Test Edited',
      description: 'Test category edited',
      path: '/test-edited',
      icon: 'test',
    })[0],
  ).toEqual({
    key: 'test',
    name: 'Test Edited',
    description: 'Test category edited',
    path: '/test-edited',
    icon: 'test',
  });

  // Remove a category
  expect(Webord.removeCategory('test')).toEqual([
    { categoryKey: 'test', description: 'Test category', icon: 'test', key: 'test2', name: 'Test2', path: '/test2' },
  ]);
});
