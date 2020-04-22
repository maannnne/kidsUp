import { Template } from 'meteor/templating';
import { TAPi18n } from 'meteor/tap:i18n';

import '../main.html';
import '../main';
import '../templates/Learn/ArmenianMusic/AramKhachaturian';


Template.aramKhachaturian.helpers ({
    'getPar0': function() {
        return LearnKhachaturian.find({parID: 0});
    },
    'getPar1': function() {
        return LearnKhachaturian.find({parID: 1});
    },
    'getPar2': function() {
        return LearnKhachaturian.find({parID: 2});
    },
    'getPar3': function() {
        return LearnKhachaturian.find({parID: 3});
    },
    'getPar4': function() {
        return LearnKhachaturian.find({parID: 4});
    },
    'getPar5': function() {
        return LearnKhachaturian.find({parID: 5});
    },
    'getPar6': function() {
        return LearnKhachaturian.find({parID: 6});
    },
    'getPar7': function() {
        return LearnKhachaturian.find({parID: 7});
    },
    'getCurrentLanguage': function() {
        //console.log(typeof TAPi18n.getLanguage());
        if(TAPi18n.getLanguage() === 'en')
            return true;
        else 
            return false;
    }

});