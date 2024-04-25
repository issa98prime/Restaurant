import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award01,
    title: 'City Recognition',
    subtitle: 'We are recognised all around as the best.',
  },
  {
    imgUrl: images.award02,
    title: 'Rising Star',
    subtitle: 'Known to many as the bright and upcoming .',
  },
  {
    imgUrl: images.award03,
    title: 'AA Hospitality',
    subtitle: 'Hospitality comes first in our culinary universe.',
  },
  {
    imgUrl: images.award05,
    title: 'Outstanding Chef',
    subtitle: 'All the chefs at work are famously recognised.',
  },
];

const foods = [
  {
    title: 'Del Taco',
    price: '$20',
    tags: 'Fast Food | Mexican | Tacos',
  },
  {
    title: 'Orange Chicken Bowl',
    price: '$25',
    tags: 'Asian | Chinese',
  },
  {
    title: 'Carne Asada',
    price: '$19',
    tags: 'Mexican | Fast Food',
  },
  {
    title: 'Asada Torta',
    price: '$12',
    tags: 'Mexican | Porta',
  },
  {
    title: 'Bowl and Egg Roll',
    price: '$26',
    tags: 'Spicy Kung Pao | Chinese',
  },
  {
    title: 'Teriyaki Chicken Bowl',
    price: '$9',
    tags: 'Chinese', 
  },
];

export default { wines, cocktails, awards, foods };
