import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';
import '../main.html';
import '../main.js';
import '../templates/Accounts/RegLog.html';

Template.register.events({
    'submit form': function(e) {
        e.preventDefault();
        var email = e.target.newUserEmail.value;
        var name = e.target.newUserName.value;
        var pass = e.target.newUserPassword.value;
        var confPass = e.target.confirmPassword.value;
        if(pass === confPass){
            Accounts.createUser({
                email: email,
                password: pass,
                username: name
            }, function(error){
                if(error){
                    console.log(error.reason);
                } else {
                    Router.go('/');
                }
            });
            //Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.name": name}});
            Router.go('/');
        }
        else {
            alert('Please type matching passwords');
        }
    }
});

Template.login.events({
    'submit form': function(e){
        e.preventDefault();    
        var userEmail = e.target.userEmail.value;
        var userPassword = e.target.userPassword.value;
        Meteor.loginWithPassword(userEmail, userPassword, function(error){
            if(error){
                console.log(error.reason);
            } else {
                Router.go('/');
            }

        });
    }
});

    