import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';
import { TAPi18n } from 'meteor/tap:i18n';

import '../main.html';
import '../main';
import '../templates/Quizzes/Quiz3.html';



function getRadioValue(arg){
    let radios = document.getElementsByName(arg);
    let len = radios.length;
    for(let i = 0; i < len; i++){
        if(radios[i].checked){
            return radios[i].value;
        }
    }
};


Template.Quiz3Container.helpers({
    'isScore': function() {
        return Session.get('ShowScore3');
    }
});


Template.ScoreDetails3.events({
    'click .retakeQuiz2': function(e) {
        e.preventDefault();
        Session.set('RetakeQuiz3', true);
        document.location.reload(true);
    }
});

Template.ScoreDetails3.helpers({
    'getScore': function() {
        return Session.get('points3');
    },
    'checkIfScoreIs5': function() {
        let score = Session.get('points3');
        return (score === 5) ? true : false;
    }
});

Template.Quiz3.helpers({
    'getQuestion1': function() {
        return ArmMusicQuiz.find({questionID: 1});
    },
    'getQuestion2': function() {
        return ArmMusicQuiz.find({questionID: 2});
    },
    'getQuestion3': function() {
        return ArmMusicQuiz.find({questionID: 3});
    },    
    'getQuestion4': function() {
        return ArmMusicQuiz.find({questionID: 4});
    },
    'getQuestion5': function() {
        return ArmMusicQuiz.find({questionID: 5});
    },
    'getRadio1': function() {
        return ArmMusicRadios.find({textID: 1});
    },
    'getRadio2': function() {
        return ArmMusicRadios.find({textID: 2});
    },
    'getRadio3': function() {
        return ArmMusicRadios.find({textID: 3});
    },
    'getRadio4': function() {
        return ArmMusicRadios.find({textID: 4});
    },
    'getRadio5': function() {
        return ArmMusicRadios.find({textID: 5});
    }, 
    'getRadio6': function() {
        return ArmMusicRadios.find({textID: 6});
    },
    'getRadio7': function() {
        return ArmMusicRadios.find({textID: 7});
    },
    'showQuizAgain': function() {
        return Session.get('RetakeQuiz3');
    },
    'getCurrentLanguage': function() {
        //console.log(typeof TAPi18n.getLanguage());
        if(TAPi18n.getLanguage() === 'en')
            return true;
        else 
            return false;
    },
    'getsrc1': function() {
        return ArmMusicQuiz.find({fileName: 'question1.mp3'});
    },
    'getsrc2': function() {
        return ArmMusicQuiz.find({fileName: 'question2.mp3'});
    },
    'getsrc3': function() {
        return ArmMusicQuiz.find({fileName: 'question3.mp3'});
    },
    'getsrc4': function() {
        return ArmMusicQuiz.find({fileName: 'question4.mp3'});
    },
    'getsrc5': function() {
        return ArmMusicQuiz.find({fileName: 'question5.mp3'});
    },
});

Template.Quiz3.events({
    'submit form': function(e) {
        e.preventDefault();
        let q1UserAnswer = getRadioValue("q3q1");
        let q1CorrectAnswer = ArmMusicQuiz.find({questionID: 1}).fetch()[0].correctAnswer;
        let q2UserAnswer = getRadioValue("q3q2");
        let q2CorrectAnswer = ArmMusicQuiz.find({questionID: 2}).fetch()[0].correctAnswer;
        let q3UserAnswer = getRadioValue("q3q3");
        let q3CorrectAnswer = ArmMusicQuiz.find({questionID: 3}).fetch()[0].correctAnswer;
        let q4UserAnswer = getRadioValue("q3q4");
        let q4CorrectAnswer = ArmMusicQuiz.find({questionID: 4}).fetch()[0].correctAnswer;
        let q5UserAnswer = getRadioValue("q3q5");
        let q5CorrectAnswer = ArmMusicQuiz.find({questionID: 5}).fetch()[0].correctAnswer;
        console.log(`Your Q1 answer: ${q1UserAnswer}. The right answer: ${q1CorrectAnswer}`);
        console.log(`Your Q2 answer: ${q2UserAnswer}. The right answer: ${q2CorrectAnswer}`);
        console.log(`Your Q3 answer: ${q3UserAnswer}. The right answer: ${q3CorrectAnswer}`);
        console.log(`Your Q4 answer: ${q4UserAnswer}. The right answer: ${q4CorrectAnswer}`);
        console.log(`Your Q5 answer: ${q5UserAnswer}. The right answer: ${q5CorrectAnswer}`);
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
        Session.set('points3', points);
        Session.set('ShowScore3', true);
        Meteor.call('insertQ3NewRes', points);
    }
});
