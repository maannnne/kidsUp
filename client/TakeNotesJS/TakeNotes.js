import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import '../main.html';
import '../main.js';
import '../templates/TakeNotes/TakeNotes.html';



//TAKENOTES TEMPLATE
Template.TakeNotes.helpers({
    'getNotes': function(){
        var currentUser = Meteor.userId();
        if(Notes.find({ createdBy: currentUser }, {sort: {createdAt: -1}}).fetch().length !== 0){
            return Notes.find({ createdBy: currentUser }, {sort: {createdAt: -1}});
        }
        return false;
    }

});


//NOTE TEMPLATE
Template.Note.events({
    'keyup [name=singleNote]': function(e) {
        e.preventDefault();
        var updated = e.target.value;
        var currentNoteId = this._id;
        Notes.update({_id: currentNoteId}, {$set: {name: updated}});
    },

    'click [name=deleteButton]': function(e){
        e.preventDefault();
        var currentId = this._id;
        var confirm = window.confirm("Do you really wanna delete this note?");
        if(confirm){
            Meteor.call('removeNote', currentId);
        }
    },
    'change [type=checkbox]': function(){
        var curr = this._id;
        var state = this.completed;
        console.log(curr);
        if(state){
            Notes.update({_id: curr}, {$set: {completed: false}});
        }
        else {
            Notes.update({_id: curr}, {$set: {completed: true}});
        }  
    }
});

Template.Note.helpers({
    'checked': function() {
        var state = this.completed;
        if(state){
            return "checkedItem";
        }
        else{
            return "";
        }
    }
});
 

//ADDNOTE TEMPLATE
Template.AddNote.events({
    'submit form': function(e){
        e.preventDefault();
        var newNote = e.target.addNoteButton.value;
        var currentUser = Meteor.userId();
        Notes.insert({
            name: newNote,
            createdAt: new Date(),
            createdBy: currentUser
        });
        e.target.addNoteButton.value = null;
    }
});