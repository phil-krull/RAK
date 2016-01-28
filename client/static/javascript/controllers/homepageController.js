dak_app.controller('homepageController', function($cookies, $location, userFactory, friendFactory, actFactory, feedbackFactory) {

	this.users = [];

	this.acts = [];

	this.loggedin;

	_this = this;
	actFactory.loggedin(function(data) {
		_this.loggedin = data;
	})


	actFactory.index(function(data) {
		console.log(data);
		_this.acts = data;
	})

	  this.createDAK = function() {
	    actFactory.create(this.newDAK);
	    this.newDAK = {};
	  }

	this.reachedDAKlimit;
	this.DAKlimit;
	this.generatedDAK;

	this.generateDAk = function() {
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
	}

	this.sendFeedback = function(){
		feedbackFactory.create(_this.newFeedback);
		_this.newFeedback = {};
	}

})