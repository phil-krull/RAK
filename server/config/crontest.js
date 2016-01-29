User.find({}, function(err){
	this.generatedDAK = acts[Math.floor(acts.length * Math.random())]
          console.log(this.generatedDAK);

    user.acts.push({act_info: this.generatedDAK, completed: false});
    user.save(function(err,User){
    	if(err){
    		res.send(err);
    	} else {
    		res.json(true);
    	}
    })
})