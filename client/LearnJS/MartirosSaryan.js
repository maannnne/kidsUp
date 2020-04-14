import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { TAPi18n } from 'meteor/tap:i18n';

import '../main.html';
import '../main';
import '../templates/Learn/ArmenianArt/MartirosSaryan';


Template.martirosSaryan.helpers ({
    'getPar0': function() {
        return LearnSaryan.find({parID: 0});
    },
    'getPar1': function() {
        return LearnSaryan.find({parID: 1});
    },
    'getPar2': function() {
        return LearnSaryan.find({parID: 2});
    },
    'getPar3': function() {
        return LearnSaryan.find({parID: 3});
    },
    'getCurrentLanguage': function() {
        //console.log(typeof TAPi18n.getLanguage());
        if(TAPi18n.getLanguage() === 'en')
            return true;
        else 
            return false;
    }

});