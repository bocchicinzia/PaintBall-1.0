export class CardPriceModel {
  title: string;
  subtitle: string;
  features: { feature: string, value: string }[];
  price: number;
  special?: string;
  background?: string;
}
