const categories = [
  {
    id: 'pasta',
    name: 'Pasta',
    tags: ['food'],
    price: 25.7,
    aisle: 1, 
    aislename: 'lunch and dinner',
    image: require('../assets/icons/requan.png'),
    location: 'U'
  },
  {
    id: 'gravy',
    name: 'Gravy',
    tags: ['food'],
    price: 25.7,
    aisle: 1, 
    aislename: 'lunch and dinner',
    image: require('../assets/icons/keike.png'),
    location: 'U'
  },
  {
    id: 'cake_mixes',
    name: 'Cake Mixes',
    tags: ['food'],
    price: 14.5,
    aisle: 2, 
    aislename: 'bake time',
    image: require('../assets/icons/duonate.png'),
    location: 'I'
  },
  {
    id: 'food_storage',
    name: 'Food Storage',
    tags: ['inspirations'],
    price: 14.5,
    aisle: 2, 
    aislename: 'bake time',
    image: require('../assets/icons/zhunke.png'),
    location: 'I'
  },
  {
    id: 'frozen_daikon',
    name: 'Frozen Daikon',
    tags: ['food'],
    price: 14.5,
    aisle: 3, 
    aislename: 'frozen choices',
    image: require('../assets/icons/karuote.png'),
    location: 'I'
  },
  {
    id: 'icecream',
    name: 'Ice Cream',
    tags: ['food'],
    price: 14.5,
    aisle: 3, 
    aislename: 'frozen choices',
    image: require('../assets/icons/ruimu.png'),
    location: 'I'
  },
  {
    id: 'cheese',
    name: 'Cheese',
    tags: ['food'],
    price: 14.5,
    aisle: 4, 
    aislename: 'dairy choices',
    image: require('../assets/icons/qisi.png'),
    location: 'I'
  },
  {
    id: 'yogurt',
    name: 'Yogurt',
    tags: ['food'],
    price: 14.5,
    aisle: 4, 
    aislename: 'dairy choices',
    image: require('../assets/icons/zhunke.png'),
    location: 'I'
  },
  {
    id: 'coffee',
    name: 'Coffee',
    tags: ['food', 'beverage'],
    price: 14.5,
    aisle: 5, 
    aislename: 'breakfast',
    image: require('../assets/icons/zhunke.png'),
    location: 'I'
  },
  {
    id: 'tea',
    name: 'Tea',
    tags: ['food', 'beverage'],
    price: 14.5,
    aisle: 5, 
    aislename: 'breakfast',
    image: require('../assets/icons/zhunke.png'),
    location: 'I'
  },
  {
    id: 'bread',
    name: 'Bread',
    tags: ['food'],
    price: 5.3,
    aisle: 5, 
    aislename: 'breakfast',
    image: require('../assets/icons/raide.png'),
    location: 'H'
  },
  {
    id: 'clips',
    name: 'Clips',
    tags: ['food'],
    price: 14.5,
    aisle: 6, 
    aislename: 'snack time',
    image: require('../assets/icons/duonate.png'),
    location: 'I'
  },
  {
    id: 'juices',
    name: 'Juices',
    tags: ['food', 'beverage'],
    price: 14.5,
    aisle: 6, 
    aislename: 'snack time',
    image: require('../assets/icons/zhunke.png'),
    location: 'I'
  },
  {
    id: 'candy',
    name: 'Candies',
    tags: ['food'],
    price: 4.6,
    aisle: 6, 
    aislename: 'snack time',
    image: require('../assets/icons/pots.png'),
    location: 'Y'
  },
  {
    id: 'mask',
    name: 'Mask',
    tags: ['inspirations'],
    price: 25.7,
    aisle: 7, 
    aislename: 'personal care and health',
    image: require('../assets/icons/plants.png'),
    location: 'U'
  },
  {
    id: 'hair_care',
    name: 'Hair Care',
    tags: ['inspirations'],
    price: 17.9,
    aisle: 7, 
    aislename: 'personal care and health',
    image: require('../assets/icons/sprayers.png'),
    location: 'V'
  },
  {
    id: 'pharmacy',
    name: 'Pharmacy',
    tags: ['inspirations'],
    price: 68,
    aisle: 7, 
    aislename: 'personal care and health',
    image: require('../assets/icons/sprayers.png'),
    location: 'W'
  },
  {
    id: 'fish',
    name: 'Fish',
    tags: ['fresh','food'],
    price: 68,
    aisle: 10, 
    aislename: 'seafood',
    image: require('../assets/icons/feishi.png'),
    location: 'W'
  },
  {
    id: 'beef',
    name: 'Beef',
    tags: ['fresh','food'],
    price: 68,
    aisle: 10, 
    aislename: 'meat',
    image: require('../assets/icons/mite.png'),
    location: 'W'
  },
];

// const categories_test = [
//   {
//     id: 'personal_care',
//     name: 'Personal Care',
//     tags: ['products', 'inspirations'],
//     count: 25.7,
//     image: require('../assets/icons/plants.png'),
//     location: 'U'
//   },
//   {
//     id: 'hair_care',
//     name: 'Hair Care',
//     tags: ['products', 'shop'],
//     count: 17.9,
//     image: require('../assets/icons/seeds.png'),
//     location: 'V'
//   },
//   {
//     id: 'pharmacy',
//     name: 'Pharmacy',
//     tags: ['products', 'inspirations'],
//     count: 68,
//     image: require('../assets/icons/flowers.png'),
//     location: 'W'
//   },
//   {
//     id: 'local',
//     name: 'Local',
//     tags: ['products', 'shop'],
//     count: 5,
//     image: require('../assets/icons/sprayers.png'),
//     location: 'X'
//   },
//   {
//     id: 'candy',
//     name: 'Candies',
//     tags: ['products', 'shop'],
//     count: 4.6,
//     image: require('../assets/icons/pots.png'),
//     location: 'Y'
//   },
//   {
//     id: 'organic',
//     name: 'Organic',
//     tags: ['products', 'shop'],
//     count: 2.1,
//     image: require('../assets/icons/fertilizers.png'),
//     location: 'Z'
//   },
//   {
//     id: 'bread',
//     name: 'Bread',
//     tags: ['products', 'shop'],
//     count: 5.3,
//     image: require('../assets/icons/fertilizers.png'),
//     location: 'H'
//   },
//   {
//     id: 'frozen',
//     name: 'Icecream',
//     tags: ['products', 'shop'],
//     count: 14.5,
//     image: require('../assets/icons/fertilizers.png'),
//     location: 'I'
//   },
// ];


// const products = [
//   {
//     id: 1, 
//     name: '16 Best Plants That Thrive In Your Bedroom',
//     description: 'Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.',
//     tags: ['Interior', '27 m²', 'Ideas'],
//     images: [
//       require('../assets/images/plants_1.png'),
//       require('../assets/images/plants_2.png'),
//       require('../assets/images/plants_3.png'),
//       // showing only 3 images, show +6 for the rest
//       require('../assets/images/plants_1.png'),
//       require('../assets/images/plants_2.png'),
//       require('../assets/images/plants_3.png'),
//       require('../assets/images/plants_1.png'),
//       require('../assets/images/plants_2.png'),
//       require('../assets/images/plants_3.png'),
//     ]
//   }
// ];

// const explore = [
//   // images
//   require('../assets/images/explore_1.png'),
//   require('../assets/images/explore_2.png'),
//   require('../assets/images/explore_3.png'),
//   require('../assets/images/explore_4.png'),
//   require('../assets/images/explore_5.png'),
//   require('../assets/images/explore_6.png'),
// ];

// const profile = {
//   username: 'react-ui-kit',
//   location: 'Belleve',
//   email: 'contact@react-ui-kit.com',
//   avatar: require('../assets/images/avatar.png'),
//   budget: 1000,
//   monthly_cap: 5000,
//   notifications: true,
//   newsletter: false,
// };

export {
  categories,
  // explore,
  // products,
  // profile,
}