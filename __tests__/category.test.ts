import { Webord } from '../src/index';

test('Webord-Category', () => {
  // Create a category

  Webord.registerCategory({
    key: 'test',
    name: 'Test',
    description: 'Test category',
    path: '/test',
    icon: 'test',
  });

  expect(Webord.categories).toEqual([
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
  expect(() => {
    Webord.registerCategory({
      key: 'test2',
      name: 'Test2',
      description: 'Test category',
      path: '/test2',
      icon: 'test',
      categoryKey: 'test',
    });
  }).not.toThrow();

  // Update a category

  Webord.updateCategory({
    key: 'test',
    name: 'Test Edited',
    description: 'Test category edited',
    path: '/test-edited',
    icon: 'test',
  });

  expect(Webord.categories[0]).toEqual({
    key: 'test',
    name: 'Test Edited',
    description: 'Test category edited',
    path: '/test-edited',
    icon: 'test',
  });

  // Remove a category

  Webord.removeCategory('test');
  Webord.removeCategory('test2');

  expect(Webord.categories).toEqual([]);
});
