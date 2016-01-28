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

	    actFactory.create(this.newDAK);
	    this.newDAK = {};
	  }

	this.reachedDAKlimit;
	this.DAKlimit;
	this.generatedDAK;

	this.thisisworking = "this is working"

	this.generateDAK = function() {
		console.log('generateDAK function is running')
		if(!this.loggedin) {
			this.generatedDAK = acts[Math.floor(acts.length * Math.random())]
			if(this.DAKlimit == 1) {
				this.DAKlimit++;
			} else if (this.DAKlimit == 3) {
				this.reachedDAKlimit = 'You have reached the limit of generating new DAKS'
			} else {
				this.DAKlimit = 1; 
			}
			
		} else {
			this.generatedDAK = acts[Math.floor(acts.length * Math.random())]
		}
		console.log(this.generatedDAK)
	}

	this.sendFeedback = function(){
		feedbackFactory.create(_this.newFeedback);
		_this.newFeedback = {};
	}

})