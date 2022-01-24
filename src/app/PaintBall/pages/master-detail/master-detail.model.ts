import { Header } from "../../components/ui-component/header/header.class";


export class MasterDetailModel {
  contentHeader: Header[];

  constructor( json: any, projectId: string ) {
    switch ( projectId ) {
      case 'header':
        this.contentHeader = json.map( ( content: Header ) => {
          return {
            img: content.img,
            alt: content.alt
          }
        } );
        break;

    }
  }
}
