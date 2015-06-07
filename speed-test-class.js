function SpeedTest (testImplement, testParams, repetitions) {
	/*		
	 *		@testImplement
	 *			Specific code we want to test for performance speed
	 *		@testParams
	 *			Whatever parameters our test code needs in order to work correctly
	 *		@repetitions
	 *			Higher repetitions equal more reliable average speed
	 */	

	this.testImplement = testImplement;
	this.testParams = testParams;
	this.repetitions = repetitions || 10000;
	this.average = 0;
}

SpeedTest.prototype = {
	startTest: function () {
		var beginTime, endTime, sumTimes = 0;
		for (var i = 0, x = this.repetitions; i < x; i++) {
			// +new Date() gives us a numerical version of the Date object
			beginTime = +new Date(); // Starting the clock
			this.testImplement(this.testParams);
			endTime = +new Date(); // Stopping the clock
			sumTimes += endTime - beginTime;
		}
		this.average = sumTimes / this.repetitions;
		return console.log("Average execution accross " + this.repetitions + ": " + this.average);
	}
}