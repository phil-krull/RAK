dak_app.controller('homepageController', function($cookies, $location, userFactory, friendFactory, actFactory, feedbackFactory) {

	this.users = [];

	this.acts = [];

	this.loggedin = actFactory.loggedin;

	_this = this;
	// actFactory.loggedin(function(data) {
	// 	_this.loggedin = data;
	// 	console.log('Logged in?' + data)
	// })


	actFactory.index(function(data) {
		console.log(data);
		_this.acts = data;
	})

	  this.createDAK = function() {
	  	console.log(this.newDAK);

	    actFactory.create(this.newDAK, function() {

	    	actFactory.index(function(data) {
	    		_this.acts = data;
	    	})
	    });

	    this.newDAK = {};
	  }

	this.reachedDAKlimit;
	this.DAKlimit;
	this.generatedDAK;
	var doNotGenerateDAK = false;

	this.thisisworking = "this is working"

	this.generateDAK = function() {
		console.log('generateDAK function is running')
		if(doNotGenerateDAK == false) {

				if(this.loggedin() == false) {
				console.log("this if statement is running")
				this.generatedDAK = acts[Math.floor(acts.length * Math.random())]
				if(this.DAKlimit <  2) {
					this.DAKlimit++;
				} else if (this.DAKlimit == 2) {
					this.reachedDAKlimit = 'You have reached the limit of generating new DAKS'
					doNotGenerateDAK = true;
					console.log(doNotGenerateDAK);
					console.log(this.reachedDAKlimit);
				} else {
					this.DAKlimit = 1; 
				}
				
			} else {
				this.generatedDAK = acts[Math.floor(acts.length * Math.random())]
			}
			console.log(this.generatedDAK)
			console.log(this.DAKlimit);


		} else {
			this.reachedDAKlimit = 'You have reached the limit of generating new DAKS'
			console.log(doNotGenerateDAK);
			console.log(this.reachedDAKlimit);
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