import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';
import { TAPi18n } from 'meteor/tap:i18n';

import '../main.html';
import '../main';
import '../templates/Home';

TAPi18n.setLanguage(localStorage.getItem('currentLanguage') || 'en');

Template.Feed.helpers ({
    getQuiz1FeedItems: function() {
        const currentUser = Meteor.userId();
        return Q1Results.find({userID: currentUser}, {sort: {sortingDate: -1}}).fetch();
    },
    getQuiz2FeedItems: function() {
        var currentUser = Meteor.userId();
        return Q2Results.find({userID: currentUser}, {sort: {sortingDate: -1}}).fetch();
    },
    getQuiz3FeedItems: function() {
        var currentUser = Meteor.userId();
        return Q3Results.find({userID: currentUser}, {sort: {sortingDate: -1}}).fetch();
    },
    getUserEmail: function() {
        return Meteor.users.find({_id: Meteor.userId()});
    },
    noFeedItems: function() {
        var currentUser = Meteor.userId();
        if((Q1Results.find({userID: currentUser}).fetch().length === 0) && (Q2Results.find({userID: currentUser}).fetch().length === 0)){
            console.log(Q1Results.find({userID: currentUser}).fetch().length);
            return true;
        }
        else {
            console.log(`from else ${Q1Results.find({userID: currentUser}).fetch().length}`);
            console.log(`from else ${Q2Results.find({userID: currentUser}).fetch().length}`);
            return false;
        }     
    },
    clearFeedItems: function() {
        
    }
});
