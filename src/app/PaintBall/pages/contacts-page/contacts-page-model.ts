import { CardContact } from "../../components/ui-component/card-contact/card-contact-model.class";
import { TabGroupContacts } from "../../components/ui-component/tab-contacts/tab-group-contacts.model.class";

export class ContactsPageModel {
  contentTabs: TabGroupContacts[];
  contentCard: CardContact[];

  constructor( json: any, projectId: string ) {
    switch ( projectId ) {
      case 'tabs-contacts':
        this.contentTabs = json.map( ( content: TabGroupContacts ) => {
          return {
            label: content.label,
            path: content.path,
            alt: content.alt
          }
        } );
        break;

      case 'card-contacts':
        this.contentCard = json.map( ( content: CardContact[] ) => {
          return content;
        } );
        break;
    }
  }
}
