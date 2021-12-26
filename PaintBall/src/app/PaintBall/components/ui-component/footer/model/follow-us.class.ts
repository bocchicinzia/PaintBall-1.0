export class FollowUs {
  path: string;
  label: string;
  icon: string;
  paragraph?: string;


  constructor( path: string, label: string, icon: string, paragraph?: string ) {
    this.path = path;
    this.label = label;
    this.icon = icon;
    this.paragraph = paragraph;
  }

}
