Router.configure({
   
    layoutTemplate: 'layout'
    
});

Router.route('/', function () {
  this.render('main');
});
Router.route('/users', function () {
	if (Meteor.user()) {
	  this.render('users');
  } else {
  	swal('Please log in to continue')
  	Router.go('/')
  }
});

Router.route('/user/:_id', function () {
	if (Meteor.user()) {
	  var user = Meteor.users.findOne({_id: this.params._id});
	  this.render('user', {data: user});
  } else {
  	swal('Please log in to continue')
  	Router.go('/')
  }
});