import { Card } from "../../components/ui-component/card/card.class";
import { Carousel } from "../../components/ui-component/carousel/carousel.class";
import { Copyright } from "../../components/ui-component/footer/model/copyright.class";
import { FollowUs } from "../../components/ui-component/footer/model/follow-us.class";
import { Sponsor } from "../../components/ui-component/footer/model/sponsor.class";
import { ContentNavbar, MenuNavbar } from "../../components/ui-component/navbar/menuNavbar.class";

export class HomePageModel {
  menu: MenuNavbar[] = [];
  contentNavbar: ContentNavbar[];
  cards: Card[] = [];
  carousel: Carousel[] = [];
  footer_copyright: Copyright[];
  footer_followUs: FollowUs[];
  footer_sponsor: Sponsor[];

  constructor( json: any, projectId: string ) {
    switch ( projectId ) {
      case 'vertical-menu':
        this.menu = json.map( ( menu: MenuNavbar ) => {
          return {
            label: menu.label,
            path: menu.path
          }
        } );
        break;
      case 'content-navbar':
        this.contentNavbar = json.map( ( content: ContentNavbar ) => {
          return {
            logo: content.logo,
            icon: content.icon
          }
        } );
        break;
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
        break;
      case 'footer_copyright':
        this.footer_copyright = json[0].copyright.map( ( copy: Copyright ) => {
          return {
            label: copy.label,
            paragraph: copy.paragraph
          }
        } );
        break;
      case 'footer_followUs':
        this.footer_followUs = json[0].followUs.map( ( follow: FollowUs ) => {
          return {
            path: follow.path,
            label: follow.label,
            icon: follow.icon,
            paragraph: follow.paragraph
          }
        } );
        break;
      case 'footer_sponsor':
        this.footer_sponsor = json[0].sponsor.map( ( sponsor: Sponsor ) => {
          return {
            label: sponsor.label,
            path: sponsor.path,
            img: sponsor.img
          }
        } );
        break;
    }
  }
}
