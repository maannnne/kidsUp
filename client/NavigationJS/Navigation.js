import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';
import { TAPi18n } from 'meteor/tap:i18n';
import '../main.html';
import '../main.js';
import '../templates/Navigation';

Template.Navigation.events({
    'click [name=logoutButton]': function(e) {
        e.preventDefault();
        Meteor.logout();
        Router.go('/');
    }
});