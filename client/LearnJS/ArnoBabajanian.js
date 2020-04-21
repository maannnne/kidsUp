import { Template } from 'meteor/templating';
import { TAPi18n } from 'meteor/tap:i18n';

import '../main.html';
import '../main';
import '../templates/Learn/ArmenianMusic/ArnoBabajanian';


Template.arnoBabajanian.helpers ({
    'getPar0': function() {
        return LearnBabajanian.find({parID: 0});
    },
    'getPar1': function() {
        return LearnBabajanian.find({parID: 1});
    },
    'getPar2': function() {
        return LearnBabajanian.find({parID: 2});
    },
    'getPar3': function() {
        return LearnBabajanian.find({parID: 3});
    },
    'getPar4': function() {
        return LearnBabajanian.find({parID: 4});
    },
    'getCurrentLanguage': function() {
        //console.log(typeof TAPi18n.getLanguage());
        if(TAPi18n.getLanguage() === 'en')
            return true;
        else 
            return false;
    }

});