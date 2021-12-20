export class Card {
  category: string;
  title: string;
  description: string;

  constructor( category: string, title: string, description: string ) {
    this.category = category;
    this.title = title;
    this.description = description;
  }
}
