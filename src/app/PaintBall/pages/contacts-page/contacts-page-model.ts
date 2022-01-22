import { CardContact } from "../../components/ui-component/card-contact/card-contact-model.class";
import { FeedbackInputForm } from "../../components/ui-component/feedback/form/form-model/form.model.class";
import { TabGroupContacts } from "../../components/ui-component/tab-contacts/tab-group-contacts.model.class";

export class ContactsPageModel {
  contentTabs: TabGroupContacts[];
  contentCard: CardContact[];
  contentFeedbackFormInput: FeedbackInputForm[];

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

      case 'feedback-form-input':
        this.contentFeedbackFormInput = json[0].input.map( ( content: FeedbackInputForm[] ) => {
          return content;
        } );
        break;
    }
  }
}
