

if (Meteor.isClient) {
 
Meteor.subscribe("users");

  
  Template.main.onRendered(function () {
    
      $('#my-datepicker').datepicker();

  })
    
  Template.main.events({
    'submit form': function (event) {

        var date = event.target.date.value;
        var id = Meteor.userId();
        console.log(date)
        var user = Meteor.users.findOne({"_id": id})
        console.log(user._id)
        Meteor.users.update( { '_id':  user._id }, { $set: { 'profile.birthday': date }} )
    }
  });

  Template.main.helpers({
    
    registered: function(){
      if (Meteor.user()) {
        return true
      } else {return false}
    } 

  });

  Template.users.helpers({
    
    users: function(){
        return Meteor.users.find({})
    } 

  });

}

if (Meteor.isServer) {

 

};

ServiceConfiguration.configurations.upsert(
{ service: "google"},

 {$set: { 
  clientId: "595266660143-fj7b45k7jqceh52luqdblsr12c5iuq77.apps.googleusercontent.com",
  loginStyle: "popup",
  secret: "58ZaPsTfM-LzIsn7vkHF3voo"
}});