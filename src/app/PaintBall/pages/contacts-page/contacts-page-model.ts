import { CardContact } from "../../components/ui-component/card-contact/card-contact-model.class";
import { FormFeedbackManager } from "../../components/ui-component/feedback/feedback.class";
import { FeedbackInputForm } from "../../components/ui-component/feedback/form/form-model/form.model.class";
import { ModalConfirm } from "../../components/ui-component/feedback/modal-confirm/modal-confirm.class";
import { TabGroupContacts } from "../../components/ui-component/tab-contacts/tab-group-contacts.model.class";

export class ContactsPageModel {
  contentTabs: TabGroupContacts[];
  contentCard: CardContact[];
  contentFeedbackManager: FormFeedbackManager[];
  contentFeedbackFormInput: FeedbackInputForm[];
  contentFeedbackFormTextArea: FeedbackInputForm[];
  contentModalConfirm: ModalConfirm;

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

      case 'feedback-manager':
        this.contentFeedbackManager = json.map( ( content: FormFeedbackManager ) => {
          return {
            title: content.title,
            msgNoCommentYet: content.msgNoCommentYet,
            alertMsg: content.alertMsg,
            forwardButton: content.forwardButton,
            iconButton: content.iconButton
          }
        } )
        break;

      case 'feedback-form-input':
        this.contentFeedbackFormInput = json[0].input.map( ( content: FeedbackInputForm[] ) => {
          return content;
        } );
        break;

      case 'feedback-form-text-area':
        this.contentFeedbackFormTextArea = json[0]['text-area'].map( ( content: FeedbackInputForm[] ) => {
          return content;
        } );
        break;

      case 'modal-confirm':
        this.contentModalConfirm = json.map( ( content: ModalConfirm ) => {
          return {
            icon: content.icon,
            title: content.title,
            paragraph: content.paragraph,
            forwardButton: content.forwardButton,
            backwardButton: content.backwardButton
          };
        } );
        break;
    }
  }
}
