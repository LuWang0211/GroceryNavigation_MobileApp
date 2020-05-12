const categories_old = [
  {
    id: 'plants',
    name: 'Plants',
    tags: ['products', 'inspirations'],
    count: 147,
    image: require('../assets/icons/plants.png'),
  },
  {
    id: 'seeds',
    name: 'Seeds',
    tags: ['products', 'shop'],
    count: 16,
    image: require('../assets/icons/seeds.png')
  },
  {
    id: 'flowers',
    name: 'Flowers',
    tags: ['products', 'inspirations'],
    count: 68,
    image: require('../assets/icons/flowers.png')
  },
  {
    id: 'sprayers',
    name: 'Sprayers',
    tags: ['products', 'shop'],
    count: 17,
    image: require('../assets/icons/sprayers.png')
  },
  {
    id: 'pots',
    name: 'Pots',
    tags: ['products', 'shop'],
    count: 47,
    image: require('../assets/icons/pots.png')
  },
  {
    id: 'fertilizers',
    name: 'fertilizers',
    tags: ['products', 'shop'],
    count: 47,
    image: require('../assets/icons/fertilizers.png')
  },
  {
    id: 'newitem',
    name: 'newitem',
    tags: ['products', 'shop'],
    count: 47,
    image: require('../assets/icons/fertilizers.png')
  },
  {
    id: 'icecream',
    name: 'icecream',
    tags: ['products', 'shop'],
    count: 47,
    image: require('../assets/icons/fertilizers.png')
  },
];

const categories = [
  {
    id: 'personal_care',
    name: 'Personal Care',
    tags: ['products', 'inspirations'],
    count: 25.7,
    image: require('../assets/icons/plants.png'),
    location: 'U'
  },
  {
    id: 'hair_care',
    name: 'Hair Care',
    tags: ['products', 'shop'],
    count: 17.9,
    image: require('../assets/icons/seeds.png'),
    location: 'V'
  },
  {
    id: 'pharmacy',
    name: 'Pharmacy',
    tags: ['products', 'inspirations'],
    count: 68,
    image: require('../assets/icons/flowers.png'),
    location: 'W'
  },
  {
    id: 'local',
    name: 'Local',
    tags: ['products', 'shop'],
    count: 5,
    image: require('../assets/icons/sprayers.png'),
    location: 'X'
  },
  {
    id: 'candy',
    name: 'Candies',
    tags: ['products', 'shop'],
    count: 4.6,
    image: require('../assets/icons/pots.png'),
    location: 'Y'
  },
  {
    id: 'organic',
    name: 'Organic',
    tags: ['products', 'shop'],
    count: 2.1,
    image: require('../assets/icons/fertilizers.png'),
    location: 'Z'
  },
  {
    id: 'bread',
    name: 'Bread',
    tags: ['products', 'shop'],
    count: 5.3,
    image: require('../assets/icons/fertilizers.png'),
    location: 'H'
  },
  {
    id: 'frozen',
    name: 'Icecream',
    tags: ['products', 'shop'],
    count: 14.5,
    image: require('../assets/icons/fertilizers.png'),
    location: 'I'
  },
];

const products = [
  {
    id: 1, 
    name: '16 Best Plants That Thrive In Your Bedroom',
    description: 'Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.',
    tags: ['Interior', '27 m²', 'Ideas'],
    images: [
      require('../assets/images/plants_1.png'),
      require('../assets/images/plants_2.png'),
      require('../assets/images/plants_3.png'),
      // showing only 3 images, show +6 for the rest
      require('../assets/images/plants_1.png'),
      require('../assets/images/plants_2.png'),
      require('../assets/images/plants_3.png'),
      require('../assets/images/plants_1.png'),
      require('../assets/images/plants_2.png'),
      require('../assets/images/plants_3.png'),
    ]
  }
];

const explore = [
  // images
  require('../assets/images/explore_1.png'),
  require('../assets/images/explore_2.png'),
  require('../assets/images/explore_3.png'),
  require('../assets/images/explore_4.png'),
  require('../assets/images/explore_5.png'),
  require('../assets/images/explore_6.png'),
];

const profile = {
  username: 'react-ui-kit',
  location: 'Europe',
  email: 'contact@react-ui-kit.com',
  avatar: require('../assets/images/avatar.png'),
  budget: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false,
};

export {
  categories,
  explore,
  products,
  profile,
}