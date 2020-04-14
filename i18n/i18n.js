import { TAPi18n } from 'meteor/tap:i18n';
import '../client/templates/Main';
import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';

Template.Main.events({
    'click .arm-lang': function(e) {
        localStorage.setItem('currentLanguage','hy')
        e.preventDefault();
        TAPi18n.setLanguage('hy');
    },

    'click .eng-lang': function(e) {
        localStorage.setItem('currentLanguage','en')
        e.preventDefault();
        TAPi18n.setLanguage('en');
    }
});

