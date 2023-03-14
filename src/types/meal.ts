import {Category} from './category';

export type Meal = {
  id: string;
  categoryIds: Array<Category['id']>;
  title: string;
  affordability: string;
  complexity: string;
  imageUrl: string;
  duration: number;
  ingredients: Array<string>;
  steps: Array<string>;
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;
};
