export type Items = {
  productId: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
}[];

export type Item = {
  productId: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
}

export enum Category {
  BigPlate = "big plate",
  Biriyanis = "biriyanis",
  BurgersWraps = "burgers & wraps",
  Continental = "continental",
  FitNFab = "fit n fab",
  FreshDesserts = "fresh desserts",
  Indian = "indian",
  SandwichesMore = "sandwiches & more",
  SidesAndBeverages = "sides and beverages",
  WorkStation = "work-station",
}

export interface ItemsData {
  cursor: number;
  items: Item;
  totalItems: number;
}
