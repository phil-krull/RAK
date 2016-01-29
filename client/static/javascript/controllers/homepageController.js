dak_app.controller('homepageController', function($cookies, $location, userFactory, friendFactory, actFactory, feedbackFactory) {

	this.users = [];

	this.acts = [];



	this.loggedin = actFactory.loggedin;

	_this = this;
	// actFactory.loggedin(function(data) {
	// 	_this.loggedin = data;
	// 	console.log('Logged in?' + data)
	// })

	if ( $cookies.get('userId')) {
		this.userId = $cookies.get('userId');
	}

	actFactory.index(function(data) {
		// console.log(data);
		_this.acts = data;
	})

	this.actSubmittedMessage;

	  this.createDAK = function() {
	  	// console.log(this.newDAK);

	    actFactory.create(this.newDAK, function() {


	    	actFactory.index(function(data) {
	    		_this.acts = data;
	    	})



	    });

	   this.actSubmittedMessage = "Thank you for submitting your Act of Kindness"

	    this.newDAK = {};
	  }

	this.reachedDAKlimit;
	this.DAKlimit;
	this.generatedDAK;
	var doNotGenerateDAK = false;

	this.thisisworking = "this is working"

	this.generateDAK = function() {

		console.log('generateDAK function is running')

		if(this.loggedin() === false) {

			if(doNotGenerateDAK === false) {
				console.log('this if statement is running');
				if(this.DAKlimit < 2) {
					this.generatedDAK = acts[Math.floor(acts.length * Math.random())]
					this.DAKlimit++;
				} else if (this.DAKlimit == 2) {
					this.reachedDAKlimit = 'Daily limit reached. Please REGISTER for more features'
					doNotGenerateDAK = true;
					console.log(doNotGenerateDAK);
					console.log(this.reachedDAKlimit);
				} else {
					this.generatedDAK = acts[Math.floor(acts.length * Math.random())]
					this.DAKlimit = 1;
				}
			}
		} else if(this.loggedin() === true) {

			this.generatedDAK = acts[Math.floor(acts.length * Math.random())]

			console.log(this.generatedDAK);

			var addedAct = {};
			addedAct.userID = this.userId;
			addedAct.actID = this.generatedDAK._id

			userFactory.addAct(addedAct)

		}
	}

	this.sendFeedback = function(){
		feedbackFactory.create(_this.newFeedback);
		_this.newFeedback = {};
	}

	// this.showPopUp = function () {

	// }

	// this.hidePopUp = function() {
		
	// }


















})