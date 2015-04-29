

if (Meteor.isClient) {
 
Meteor.subscribe("users");

  Template.users.helpers({
    
    users: function(){
      console.log(Meteor.users.find().fetch())
        return Meteor.users.find({})
    } 

  });

}