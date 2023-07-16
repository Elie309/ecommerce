 const fakeData = [
    {
      "id": 1,
      "name": "Product 1",
      "price": 9.99,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus, elit ut cursus tincidunt, mauris enim porttitor metus, nec euismod est risus ut erat. Nullam tristique iaculis ipsum, sit amet laoreet nisi lobortis sed. Sed ut tellus lacus. Vivamus efficitur posuere velit ut varius. Maecenas mollis lectus ac metus condimentum volutpat. Duis ac mi semper, fermentum quam id, fringilla elit. Nullam sollicitudin dui et libero elementum, ac iaculis justo malesuada. Morbi at eleifend urna. Vivamus facilisis lacinia dui a cursus. Fusce id dui elit. Sed iaculis nulla eget hendrerit congue. Mauris eu dolor neque. Aliquam iaculis, nisl non posuere lobortis, enim massa pharetra diam, vel rutrum sem quam vel est. Mauris id massa quis metus ultrices bibendum vel eu odio.",
      "image": "https://via.placeholder.com/150",
      "category": "Category 1",
      "quantity": 5,
      "currency": "USD",
      "reviews": "4.5 stars"
    },
    {
      "id": 2,
      "name": "Product 2",
      "price": 14.99,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus, elit ut cursus tincidunt, mauris enim porttitor metus, nec euismod est risus ut erat. Nullam tristique iaculis ipsum, sit amet laoreet nisi lobortis sed. Sed ut tellus lacus. Vivamus efficitur posuere velit ut varius. Maecenas mollis lectus ac metus condimentum volutpat. Duis ac mi semper, fermentum quam id, fringilla elit. Nullam sollicitudin dui et libero elementum, ac iaculis justo malesuada. Morbi at eleifend urna. Vivamus facilisis lacinia dui a cursus. Fusce id dui elit. Sed iaculis nulla eget hendrerit congue. Mauris eu dolor neque. Aliquam iaculis, nisl non posuere lobortis, enim massa pharetra diam, vel rutrum sem quam vel est. Mauris id massa quis metus ultrices bibendum vel eu odio.",
      "image": "https://via.placeholder.com/150",
      "category": "Category 2",
      "quantity": 10,
      "currency": "USD",
      "reviews": "3.8 stars"
    },
    {
      "id": 3,
      "name": "Product 3",
      "price": 19.99,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus, elit ut cursus tincidunt, mauris enim porttitor metus, nec euismod est risus ut erat. Nullam tristique iaculis ipsum, sit amet laoreet nisi lobortis sed. Sed ut tellus lacus. Vivamus efficitur posuere velit ut varius. Maecenas mollis lectus ac metus condimentum volutpat. Duis ac mi semper, fermentum quam id, fringilla elit. Nullam sollicitudin dui et libero elementum, ac iaculis justo malesuada. Morbi at eleifend urna. Vivamus facilisis lacinia dui a cursus. Fusce id dui elit. Sed iaculis nulla eget hendrerit congue. Mauris eu dolor neque. Aliquam iaculis, nisl non posuere lobortis, enim massa pharetra diam, vel rutrum sem quam vel est. Mauris id massa quis metus ultrices bibendum vel eu odio.",
      "image": "https://via.placeholder.com/150",
      "category": "Category 1",
      "quantity": 3,
      "currency": "USD",
      "reviews": "4.2 stars"
    },
    {
      "id": 4,
      "name": "Product 4",
      "price": 24.99,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus, elit ut cursus tincidunt, mauris enim porttitor metus, nec euismod est risus ut erat. Nullam tristique iaculis ipsum, sit amet laoreet nisi lobortis sed. Sed ut tellus lacus. Vivamus efficitur posuere velit ut varius. Maecenas mollis lectus ac metus condimentum volutpat. Duis ac mi semper, fermentum quam id, fringilla elit. Nullam sollicitudin dui et libero elementum, ac iaculis justo malesuada. Morbi at eleifend urna. Vivamus facilisis lacinia dui a cursus. Fusce id dui elit. Sed iaculis nulla eget hendrerit congue. Mauris eu dolor neque. Aliquam iaculis, nisl non posuere lobortis, enim massa pharetra diam, vel rutrum sem quam vel est. Mauris id massa quis metus ultrices bibendum vel eu odio.",
      "image": "https://via.placeholder.com/150",
      "category": "Category 2",
      "quantity": 8,
      "currency": "USD",
      "reviews": "4.9 stars"
    },
    {
      "id": 5,
      "name": "Product 5",
      "price": 29.99,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus, elit ut cursus tincidunt, mauris enim porttitor metus, nec euismod est risus ut erat. Nullam tristique iaculis ipsum, sit amet laoreet nisi lobortis sed. Sed ut tellus lacus. Vivamus efficitur posuere velit ut varius. Maecenas mollis lectus ac metus condimentum volutpat. Duis ac mi semper, fermentum quam id, fringilla elit. Nullam sollicitudin dui et libero elementum, ac iaculis justo malesuada. Morbi at eleifend urna. Vivamus facilisis lacinia dui a cursus. Fusce id dui elit. Sed iaculis nulla eget hendrerit congue. Mauris eu dolor neque. Aliquam iaculis, nisl non posuere lobortis, enim massa pharetra diam, vel rutrum sem quam vel est. Mauris id massa quis metus ultrices bibendum vel eu odio.",
      "image": "https://via.placeholder.com/150",
      "category": "Category 1",
      "quantity": 2,
      "currency": "USD",
      "reviews": "3.7 stars"
    },
    {
      "id": 6,
      "name": "Product 6",
      "price": 34.99,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus, elit ut cursus tincidunt, mauris enim porttitor metus, nec euismod est risus ut erat. Nullam tristique iaculis ipsum, sit amet laoreet nisi lobortis sed. Sed ut tellus lacus. Vivamus efficitur posuere velit ut varius. Maecenas mollis lectus ac metus condimentum volutpat. Duis ac mi semper, fermentum quam id, fringilla elit. Nullam sollicitudin dui et libero elementum, ac iaculis justo malesuada. Morbi at eleifend urna. Vivamus facilisis lacinia dui a cursus. Fusce id dui elit. Sed iaculis nulla eget hendrerit congue. Mauris eu dolor neque. Aliquam iaculis, nisl non posuere lobortis, enim massa pharetra diam, vel rutrum sem quam vel est. Mauris id massa quis metus ultrices bibendum vel eu odio.",
      "image": "https://via.placeholder.com/150",
      "category": "Category 2",
      "quantity": 6,
      "currency": "USD",
      "reviews": "4.6 stars"
    },
    {
      "id": 7,
      "name": "Product 7",
      "price": 39.99,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus, elit ut cursus tincidunt, mauris enim porttitor metus, nec euismod est risus ut erat. Nullam tristique iaculis ipsum, sit amet laoreet nisi lobortis sed. Sed ut tellus lacus. Vivamus efficitur posuere velit ut varius. Maecenas mollis lectus ac metus condimentum volutpat. Duis ac mi semper, fermentum quam id, fringilla elit. Nullam sollicitudin dui et libero elementum, ac iaculis justo malesuada. Morbi at eleifend urna. Vivamus facilisis lacinia dui a cursus. Fusce id dui elit. Sed iaculis nulla eget hendrerit congue. Mauris eu dolor neque. Aliquam iaculis, nisl non posuere lobortis, enim massa pharetra diam, vel rutrum sem quam vel est. Mauris id massa quis metus ultrices bibendum vel eu odio.",
      "image": "https://via.placeholder.com/150",
      "category": "Category 1",
      "quantity": 1,
      "currency": "USD",
      "reviews": "4.1 stars"
    },
    {
      "id": 8,
      "name": "Product 8",
      "price": 44.99,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus, elit ut cursus tincidunt, mauris enim porttitor metus, nec euismod est risus ut erat. Nullam tristique iaculis ipsum, sit amet laoreet nisi lobortis sed. Sed ut tellus lacus. Vivamus efficitur posuere velit ut varius. Maecenas mollis lectus ac metus condimentum volutpat. Duis ac mi semper, fermentum quam id, fringilla elit. Nullam sollicitudin dui et libero elementum, ac iaculis justo malesuada. Morbi at eleifend urna. Vivamus facilisis lacinia dui a cursus. Fusce id dui elit. Sed iaculis nulla eget hendrerit congue. Mauris eu dolor neque. Aliquam iaculis, nisl non posuere lobortis, enim massa pharetra diam, vel rutrum sem quam vel est. Mauris id massa quis metus ultrices bibendum vel eu odio.",
      "image": "https://via.placeholder.com/150",
      "category": "Category 2",
      "quantity": 9,
      "currency": "USD",
      "reviews": "3.9 stars"
    },
    {
      "id": 9,
      "name": "Product 9",
      "price": 49.99,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus, elit ut cursus tincidunt, mauris enim porttitor metus, nec euismod est risus ut erat. Nullam tristique iaculis ipsum, sit amet laoreet nisi lobortis sed. Sed ut tellus lacus. Vivamus efficitur posuere velit ut varius. Maecenas mollis lectus ac metus condimentum volutpat. Duis ac mi semper, fermentum quam id, fringilla elit. Nullam sollicitudin dui et libero elementum, ac iaculis justo malesuada. Morbi at eleifend urna. Vivamus facilisis lacinia dui a cursus. Fusce id dui elit. Sed iaculis nulla eget hendrerit congue. Mauris eu dolor neque. Aliquam iaculis, nisl non posuere lobortis, enim massa pharetra diam, vel rutrum sem quam vel est. Mauris id massa quis metus ultrices bibendum vel eu odio.",
      "image": "https://via.placeholder.com/150",
      "category": "Category 1",
      "quantity": 4,
      "currency": "USD",
      "reviews": "4.3 stars"
    },
    {
      "id": 10,
      "name": "Product 10",
      "price": 54.99,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus, elit ut cursus tincidunt, mauris enim porttitor metus, nec euismod est risus ut erat. Nullam tristique iaculis ipsum, sit amet laoreet nisi lobortis sed. Sed ut tellus lacus. Vivamus efficitur posuere velit ut varius. Maecenas mollis lectus ac metus condimentum volutpat. Duis ac mi semper, fermentum quam id, fringilla elit. Nullam sollicitudin dui et libero elementum, ac iaculis justo malesuada. Morbi at eleifend urna. Vivamus facilisis lacinia dui a cursus. Fusce id dui elit. Sed iaculis nulla eget hendrerit congue. Mauris eu dolor neque. Aliquam iaculis, nisl non posuere lobortis, enim massa pharetra diam, vel rutrum sem quam vel est. Mauris id massa quis metus ultrices bibendum vel eu odio.",
      "image": "https://via.placeholder.com/150",
      "category": "Category 2",
      "quantity": 7,
      "currency": "USD",
      "reviews": "4.7 stars"
    }
  ]

  export default fakeData;