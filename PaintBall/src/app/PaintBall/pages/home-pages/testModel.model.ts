import { Card } from "../../components/ui-component/card/card.class";
import { Carousel } from "../../components/ui-component/carousel/carousel.class";

export class TestModel {
  cards: Card[] = [];
  carousel: Carousel[] = [];

  constructor( json: any, projectId: string ) {
    switch ( projectId ) {
      case 'card':
        this.cards = json.map( ( card: Card ) => {
          return {
            category: card.category,
            title: card.title,
            description: card.description,
            urlImg: card.urlImg,
            urlBackground: card.urlBackground
          }
        } );
        break;
      case 'carousel':
        this.carousel = json.map( ( carousel: Carousel ) => {
          return {
            imgUrl: carousel.imgUrl
          }
        } );
    }
  }
}
