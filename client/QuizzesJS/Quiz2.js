import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';
import { TAPi18n } from 'meteor/tap:i18n';

import '../main.html';
import '../main';
import '../templates/Quizzes/Quiz2.html';



function getRadioValue(arg){
    let radios = document.getElementsByName(arg);
    let len = radios.length;
    for(let i = 0; i < len; i++){
        if(radios[i].checked){
            return radios[i].value;
        }
    }
};


Template.Quiz2Container.helpers({
    'isScore': function() {
        return Session.get('ShowScore2');
    }
});


Template.ScoreDetails2.events({
    'click .retakeQuiz2': function(e) {
        e.preventDefault();
        Session.set('RetakeQuiz2', true);
        document.location.reload(true);
    }
});

Template.ScoreDetails2.helpers({
    'getScore': function() {
        return Session.get('points2');
    }
});

Template.Quiz2.helpers({
    'getQuestion1': function() {
        return ArmArtQuiz.find({questionID: 1});
    },
    'getQuestion2': function() {
        return ArmArtQuiz.find({questionID: 2});
    },
    'getQuestion3': function() {
        return ArmArtQuiz.find({questionID: 3});
    },    
    'getQuestion4': function() {
        return ArmArtQuiz.find({questionID: 4});
    },
    'getQuestion5': function() {
        return ArmArtQuiz.find({questionID: 5});
    },
    'getRadio1': function() {
        return ArmArtRadios.find({textID: 1});
    },
    'getRadio2': function() {
        return ArmArtRadios.find({textID: 2});
    },
    'getRadio3': function() {
        return ArmArtRadios.find({textID: 3});
    },
    'getRadio4': function() {
        return ArmArtRadios.find({textID: 4});
    },
    'getRadio5': function() {
        return ArmArtRadios.find({textID: 5});
    }, 
    'getRadio6': function() {
        return ArmArtRadios.find({textID: 6});
    },
    'getRadio7': function() {
        return ArmArtRadios.find({textID: 7});
    },
    'getRadio8': function() {
        return ArmArtRadios.find({textID: 8});
    },
    'showQuizAgain': function() {
        return Session.get('RetakeQuiz2');
    },
    'getCurrentLanguage': function() {
        //console.log(typeof TAPi18n.getLanguage());
        if(TAPi18n.getLanguage() === 'en')
            return true;
        else 
            return false;
    },
    'getsrc1': function() {
        return ArmArtQuiz.find({imageName: 'question1.jpg'});
    },
    'getsrc2': function() {
        return ArmArtQuiz.find({imageName: 'question2.jpg'});
    },
    'getsrc3': function() {
        return ArmArtQuiz.find({imageName: 'question3.jpg'});
    },
    'getsrc4': function() {
        return ArmArtQuiz.find({imageName: 'question4.jpg'});
    },
    'getsrc5': function() {
        return ArmArtQuiz.find({imageName: 'question5.jpg'});
    },
});

Template.Quiz2.events({
    'submit form': function(e) {
        e.preventDefault();
        let q1UserAnswer = getRadioValue("q2q1");
        let q1CorrectAnswer = ArmArtQuiz.find({questionID: 1}).fetch()[0].correctAnswer;
        let q2UserAnswer = getRadioValue("q2q2");
        let q2CorrectAnswer = ArmArtQuiz.find({questionID: 2}).fetch()[0].correctAnswer;
        let q3UserAnswer = getRadioValue("q2q3");
        let q3CorrectAnswer = ArmArtQuiz.find({questionID: 3}).fetch()[0].correctAnswer;
        let q4UserAnswer = getRadioValue("q2q4");
        let q4CorrectAnswer = ArmArtQuiz.find({questionID: 4}).fetch()[0].correctAnswer;
        let q5UserAnswer = getRadioValue("q2q5");
        let q5CorrectAnswer = ArmArtQuiz.find({questionID: 5}).fetch()[0].correctAnswer;
        // console.log(`Your Q1 answer: ${q1UserAnswer}. The right answer: ${q1CorrectAnswer}`);
        // console.log(`Your Q2 answer: ${q2UserAnswer}. The right answer: ${q2CorrectAnswer}`);
        // console.log(`Your Q3 answer: ${q3UserAnswer}. The right answer: ${q3CorrectAnswer}`);
        // console.log(`Your Q4 answer: ${q4UserAnswer}. The right answer: ${q4CorrectAnswer}`);
        // console.log(`Your Q5 answer: ${q5UserAnswer}. The right answer: ${q5CorrectAnswer}`);
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
        Session.set('points2', points);
        Session.set('ShowScore2', true);
        Meteor.call('insertQ2NewRes', points);
    }
});

