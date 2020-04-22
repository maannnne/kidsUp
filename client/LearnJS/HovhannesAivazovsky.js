import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { TAPi18n } from 'meteor/tap:i18n';

import '../main.html';
import '../main';
import '../templates/Learn/ArmenianArt/HovhannesAivazovsky';


Template.hovhannesAivazovsky.helpers ({
    'getPar0': function() {
        return LearnAivazovsky.find({parID: 0});
    },
    'getPar1': function() {
        return LearnAivazovsky.find({parID: 1});
    },
    'getPar2': function() {
        return LearnAivazovsky.find({parID: 2});
    },
    'getPar3': function() {
        return LearnAivazovsky.find({parID: 3});
    },
    'getPar4': function() {
        return LearnAivazovsky.find({parID: 4});
    },
    'getPar5': function() {
        return LearnAivazovsky.find({parID: 5});
    },
    'getPar6': function() {
        return LearnAivazovsky.find({parID: 6});
    },
    'getPar7': function() {
        return LearnAivazovsky.find({parID: 7});
    },
    'getCurrentLanguage': function() {
        //console.log(typeof TAPi18n.getLanguage());
        if(TAPi18n.getLanguage() === 'en')
            return true;
        else 
            return false;
    }

});