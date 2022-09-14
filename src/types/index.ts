export interface Asset {
  id: string;
  name: string;
  price: number;
  tvl: number;
  change: number;
  popularPairs: Array<string>;
}
