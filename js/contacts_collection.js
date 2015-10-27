import Backbone from 'backbone';
import ContactsModel from './contact_model';

let ContactsCollection = Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/Contacts',

  model: ContactsModel,

  parse: function(data) {
    return data.results;
  }

});

export default ContactsCollection;
