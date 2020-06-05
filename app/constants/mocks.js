const categories = [
  {
    id: 'pasta',
    name: 'Pasta',
    tags: ['food'],
    price: 25.7,
    aisle: 1, 
    aislename: 'lunch and dinner',
    image: require('../assets/icons/pisa.png'),
    location: 'B'
  },
  {
    id: 'gravy',
    name: 'Gravy',
    tags: ['food'],
    price: 25.7,
    aisle: 1, 
    aislename: 'lunch and dinner',
    image: require('../assets/icons/keike.png'),
    location: 'Y'
  },
  {
    id: 'cake_mixes',
    name: 'Cake Mixes',
    tags: ['food'],
    price: 14.5,
    aisle: 2, 
    aislename: 'bake time',
    image: require('../assets/icons/duonate.png'),
    location: 'X'
  },
  {
    id: 'food_storage',
    name: 'Food Storage',
    tags: ['inspirations'],
    price: 14.5,
    aisle: 2, 
    aislename: 'bake time',
    image: require('../assets/icons/zhunke.png'),
    location: 'W'
  },
  {
    id: 'frozen_daikon',
    name: 'Frozen Daikon',
    tags: ['food'],
    price: 14.5,
    aisle: 3, 
    aislename: 'frozen choices',
    image: require('../assets/icons/karuote.png'),
    location: 'T'
  },
  {
    id: 'icecream',
    name: 'Ice Cream',
    tags: ['food'],
    price: 14.5,
    aisle: 3, 
    aislename: 'frozen choices',
    image: require('../assets/icons/ruimu.png'),
    location: 'U'
  },
  {
    id: 'cheese',
    name: 'Cheese',
    tags: ['food'],
    price: 14.5,
    aisle: 4, 
    aislename: 'dairy choices',
    image: require('../assets/icons/qisi.png'),
    location: 'S'
  },
  {
    id: 'yogurt',
    name: 'Yogurt',
    tags: ['food'],
    price: 14.5,
    aisle: 4, 
    aislename: 'dairy choices',
    image: require('../assets/icons/zhunke.png'),
    location: 'R'
  },
  {
    id: 'coffee',
    name: 'Coffee',
    tags: ['food', 'beverage'],
    price: 14.5,
    aisle: 5, 
    aislename: 'breakfast',
    image: require('../assets/icons/zhunke.png'),
    location: 'O'
  },
  {
    id: 'tea',
    name: 'Tea',
    tags: ['food', 'beverage'],
    price: 14.5,
    aisle: 5, 
    aislename: 'breakfast',
    image: require('../assets/icons/zhunke.png'),
    location: 'P'
  },
  {
    id: 'bread',
    name: 'Bread',
    tags: ['food'],
    price: 5.3,
    aisle: 5, 
    aislename: 'breakfast',
    image: require('../assets/icons/raide.png'),
    location: 'O'
  },
  {
    id: 'chips',
    name: 'Chips',
    tags: ['food'],
    price: 14.5,
    aisle: 6, 
    aislename: 'snack time',
    image: require('../assets/icons/duonate.png'),
    location: 'N'
  },
  {
    id: 'juices',
    name: 'Juices',
    tags: ['food', 'beverage'],
    price: 14.5,
    aisle: 6, 
    aislename: 'snack time',
    image: require('../assets/icons/zhunke.png'),
    location: 'M'
  },
  {
    id: 'candy',
    name: 'Candies',
    tags: ['food'],
    price: 4.6,
    aisle: 6, 
    aislename: 'snack time',
    image: require('../assets/icons/pots.png'),
    location: 'G'
  },
  {
    id: 'mask',
    name: 'Mask',
    tags: ['inspirations'],
    price: 25.7,
    aisle: 7, 
    aislename: 'personal care and health',
    image: require('../assets/icons/plants.png'),
    location: 'J'
  },
  {
    id: 'hair_care',
    name: 'Hair Care',
    tags: ['inspirations'],
    price: 17.9,
    aisle: 7, 
    aislename: 'personal care and health',
    image: require('../assets/icons/sprayers.png'),
    location: 'I'
  },
  {
    id: 'pharmacy',
    name: 'Pharmacy',
    tags: ['inspirations'],
    price: 68,
    aisle: 7, 
    aislename: 'personal care and health',
    image: require('../assets/icons/sprayers.png'),
    location: 'H'
  },
  {
    id: 'fish',
    name: 'Fish',
    tags: ['fresh','food'],
    price: 68,
    aisle: 10, 
    aislename: 'seafood',
    image: require('../assets/icons/feishi.png'),
    location: 'AA'
  },
  {
    id: 'beef',
    name: 'Beef',
    tags: ['fresh','food'],
    price: 68,
    aisle: 10, 
    aislename: 'meat',
    image: require('../assets/icons/mite.png'),
    location: 'Q'
  },
  {
    id: 'egg',
    name: 'Egg',
    tags: ['fresh','food'],
    price: 68,
    aisle: 10, 
    aislename: 'meat',
    image: require('../assets/icons/aige.png'),
    location: 'L'
  },
];

export const productToLocationReverseMap = {}

for (let item of categories) {
  const {id, location}  = item;
  if (!productToLocationReverseMap[location]) {
    productToLocationReverseMap[location] = [];
  }

  productToLocationReverseMap[location].push(id);
}

export {
  categories,
}