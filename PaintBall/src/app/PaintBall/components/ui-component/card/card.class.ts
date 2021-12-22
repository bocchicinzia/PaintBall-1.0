export class Card {
  category: string;
  title: string;
  description: string;
  urlImg?: string;

  constructor( category: string, title: string, description: string, urlImg?: string ) {
    this.category = category;
    this.title = title;
    this.description = description;
    this.urlImg = urlImg;
  }
}
