import { CardPriceModel } from "../../components/ui-component/card-price/card-price-model.class";

export class PricePageModel {
  content: CardPriceModel[];

  constructor( json: any, projectId: string ) {
    switch ( projectId ) {
      case 'card-price':
        this.content = json.map( ( content: CardPriceModel ) => {
          return {
            title: content.title,
            subtitle: content.subtitle,
            features: content.features,
            price: content.price,
            special: content.special,
            background: content.background
          }
        } );
        break;
    }
  }
}
