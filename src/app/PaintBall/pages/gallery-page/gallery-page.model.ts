import { CardPriceModel } from "../../components/ui-component/card-price/card-price-model.class";
import { ButtonGallery } from "../../components/ui-component/gallery-manager/button/button-gallery.class";
import { GalleryManager } from "../../components/ui-component/gallery-manager/gallery-manager.class";
import { InputGallery } from "../../components/ui-component/gallery-manager/input/input.class";

export class GalleryPageModel {
  getInput: InputGallery[];
  getButton: ButtonGallery[];
  getImg: GalleryManager[];

  constructor( json: any, projectId: string ) {
    switch ( projectId ) {
      case 'input':
        this.getInput = json.map( ( content: InputGallery ) => {
          return {
            placeholder: content.placeholder,
            label: content.label,
            buttonValue: content.buttonValue
          }
        } );
        break;
      case 'button':
        this.getButton = json.map( ( res: ButtonGallery[] ) => {
          return res;
        } );
        break;
      case 'all-images':
        this.getImg = json.map( ( res: GalleryManager[] ) => {
          return res
        } );
        break;
    }
  }
}
