import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';



Meteor.startup(() => {
  // code to run on server at startup
});


export const Notes = new Mongo.Collection('notes');
export const ArmLitQuiz = new Mongo.Collection('armlitquiz');
export const ArmLitRadios = new Mongo.Collection('armlitradios');
export const Q1Results = new Mongo.Collection('q1results');
export const LearnTerian = new Mongo.Collection('learnterian');
export const LearnSaryan = new Mongo.Collection('learnsaryan');
export const ArmArtQuiz = new Mongo.Collection('armartquiz');
export const ArmArtRadios = new Mongo.Collection('armartradios');
export const Q2Results = new Mongo.Collection('q2results'); 

Meteor.methods({
  'insertQ1NewRes': function(points) {
    var currentUser = Meteor.userId();
    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth() + 1; 
    var yyyy = today.getFullYear();
    if(dd < 10) {
        dd = '0' + dd;
    } 

    if(mm < 10) {
        mm = '0' + mm;
    } 
    today = mm + '-' + dd + '-' + yyyy;
    Q1Results.insert({userID: currentUser, score: points, date: today, sortingDate: new Date()});
    //return Q1Results.find({userID: currentUser}, {sort: {date: -1}}).fetch()[0];
  },
  'removeNote': function(currentId) {
    var currentUser = Meteor.userId();
    Notes.remove({_id: currentId, createdBy: currentUser});

  },
  'insertQ2NewRes': function(points) {
    var currentUser = Meteor.userId();
    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth() + 1; 
    var yyyy = today.getFullYear();
    if(dd < 10) {
        dd = '0' + dd;
    } 

    if(mm < 10) {
        mm = '0' + mm;
    } 
    today = mm + '-' + dd + '-' + yyyy;
    Q2Results.insert({userID: currentUser, score: points, date: today, sortingDate: new Date()});
    //return Q1Results.find({userID: currentUser}, {sort: {date: -1}}).fetch()[0];
  },
  'removeUser': function(userID) {
    Meteor.remove({_id: userID});
  }
});

// Meteor.publish('userData', function(){
//   return Meteor.users.find({_id: Meteor.userId()}, {
//     fields: {quiz1score: 1}
//   });
// });

// Meteor.subscribe('userData');