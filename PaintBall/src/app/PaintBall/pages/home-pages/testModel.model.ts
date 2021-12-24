import { Card } from "../../components/ui-component/card/card.class";

export class TestModel {
  cards: Card[] = [];

  constructor( json: any ) {

    this.cards = json.map( ( card: Card ) => {
      return {
        category: card.category,
        title: card.title,
        description: card.description,
        urlImg: card.urlImg,
        urlBackground: card.urlBackground
      }
    } );
  }
}
