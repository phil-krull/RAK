dak_app.controller('showActController', function($routeParams, actFactory) {

	this.showactId = $routeParams.actId	
	console.log('The act Id of this act to show is');
	console.log(this.showactId);

	this.act = {};
	this.data = {};

	var _this = this;
	actFactory.show(this.showactId, function(data) {
		console.log(data)
		_this.data = data;
		_this.data.currApprovalRating = getApprovalRating();
		_this.data.currAverageUserRating = getAverageUserRating();
		_this.act = _this.data;

	})

	function getApprovalRating() {
		var count = 0;
		for (i = 0; i < _this.data.approval_rating.length; i++) {
			if(_this.data.approval_rating[i] == 1) {
				count ++;
			}
			
		}
		console.log(count);

		num = (count/_this.data.approval_rating.length) * 100

		return num.toFixed(1);

	}

	function getAverageUserRating() {
		var total = 0;
		for (i = 0; i < _this.data.user_ratings.length; i++) {
			
				total += _this.data.user_ratings[i]
			
			
		}
		console.log(total)

		num = total/_this.data.user_ratings.length

		return num.toFixed(1);

	}

})