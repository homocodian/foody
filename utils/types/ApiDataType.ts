import { Items } from "./FoodItem";

export type Data = {
  ok: boolean;
  body?: ResponseItems ;
  message: string | null;
};

export type ResponseItems = {
  category: string;
  items: Items;
  total: number
}
