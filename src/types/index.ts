export interface Asset {
  id: string;
  name: string;
  price: number;
  total_value_locked: number;
  percentage_change: number;
  popularPairs: Array<string>;
}
