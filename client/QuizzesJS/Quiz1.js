import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';
import { TAPi18n } from 'meteor/tap:i18n';

import '../main.html';
import '../main';
import '../templates/Quizzes/Quiz1.html';



function getRadioValue(arg){
    let radios = document.getElementsByName(arg);
    let len = radios.length;
    for(let i = 0; i < len; i++){
        if(radios[i].checked){
            return radios[i].value;
        }
    }
};


Template.Quiz1Container.helpers({
    'isScore': function() {
        return Session.get('ShowScore');
    }
});


Template.ScoreDetails.events({
    'click .retakeQuiz1': function(e) {
        e.preventDefault();
        Session.set('RetakeQuiz1', true);
        document.location.reload(true);
    }
});

Template.ScoreDetails.helpers({
    'getScore': function() {
        return Session.get('points');
    },
    'checkIfScoreIs5': function() {
        let score = Session.get('points');
        return (score === 5) ? true : false;
    }
});

Template.Quiz1.helpers({
    'getQuestion1': function() {
        return ArmLitQuiz.find({questionID: 1});
    },
    'getQuestion2': function() {
        return ArmLitQuiz.find({questionID: 2});
    },
    'getQuestion3': function() {
        return ArmLitQuiz.find({questionID: 3});
    },    
    'getQuestion4': function() {
        return ArmLitQuiz.find({questionID: 4});
    },
    'getQuestion5': function() {
        return ArmLitQuiz.find({questionID: 5});
    },
    'getRadio1': function() {
        return ArmLitRadios.find({textID: 1});
    },
    'getRadio2': function() {
        return ArmLitRadios.find({textID: 2});
    },
    'getRadio3': function() {
        return ArmLitRadios.find({textID: 3});
    },
    'getRadio4': function() {
        return ArmLitRadios.find({textID: 4});
    },
    'getRadio5': function() {
        return ArmLitRadios.find({textID: 5});
    }, 
    'getRadio6': function() {
        return ArmLitRadios.find({textID: 6});
    },
    'getRadio7': function() {
        return ArmLitRadios.find({textID: 7});
    },
    'getRadio8': function() {
        return ArmLitRadios.find({textID: 8});
    },
    'showQuizAgain': function() {
        return Session.get('RetakeQuiz1');
    },
    'getCurrentLanguage': function() {
        //console.log(typeof TAPi18n.getLanguage());
        if(TAPi18n.getLanguage() === 'en')
            return true;
        else 
            return false;
    }
});

Template.Quiz1.events({
    'submit form': function(e) {
        e.preventDefault();
        let q1UserAnswer = getRadioValue("q1q1");
        let q1CorrectAnswer = ArmLitQuiz.find({questionID: 1}).fetch()[0].correctAnswer;
        let q2UserAnswer = getRadioValue("q1q2");
        let q2CorrectAnswer = ArmLitQuiz.find({questionID: 2}).fetch()[0].correctAnswer;
        let q3UserAnswer = getRadioValue("q1q3");
        let q3CorrectAnswer = ArmLitQuiz.find({questionID: 3}).fetch()[0].correctAnswer;
        let q4UserAnswer = getRadioValue("q1q4");
        let q4CorrectAnswer = ArmLitQuiz.find({questionID: 4}).fetch()[0].correctAnswer;
        let q5UserAnswer = getRadioValue("q1q5");
        let q5CorrectAnswer = ArmLitQuiz.find({questionID: 5}).fetch()[0].correctAnswer;
        // console.log(`Your Q1 answer: ${q1UserAnswer}. The right answer: ${q1CorrectAnswer}`);

        let points = 0;        
        if(q1UserAnswer === q1CorrectAnswer){
            points++;
        }
        if(q2UserAnswer === q2CorrectAnswer){
            points++;
        }        
        if(q3UserAnswer === q3CorrectAnswer){
            points++;
        }
        if(q4UserAnswer === q4CorrectAnswer){
            points++;
        }        
        if(q5UserAnswer === q5CorrectAnswer){
            points++;
        }
        //console.log(`Your score: ${points}`);
        Session.set('points', points);
        Session.set('ShowScore', true);
        Meteor.call('insertQ1NewRes', points);
    }
});

