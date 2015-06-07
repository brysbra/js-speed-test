function Person (name, zipCode) {
	this.name = name;
	this.zipCode = zipCode;

	switch (zipCode) {
		case 101:
			this.location = "Reykjavik";
			break;
		case 200:
			this.location = "Kopavogur";
			break;
		case 300:
			this.location = "Akranes";
			break;
		case 400:
			this.location = "Isafjordur";
			break;
		default:
			this.location = "<NA>";
	}
}

// The parameters for test
var newborns = ["Sigurdur", "Marino", "Daniel", "Bjarki"];
var population = []; // ...tons of Person objects

// Bundle necessary parameters for test
var listsForTests = [newborns, population];

// The actual code we want to test

// 1. Implementation: not using best practices

// var noBP = function(listOfParams) {
// 	for (var i = 0; i < listOfParams[0].length; i++) {
// 		var person = new Person(listOfParams[0][i], 1);
// 		listOfParams[1].push(person);
// 	}
// }

// var noBPtest = new SpeedTest(noBP, listsForTests, 100000);
// noBPtest.startTest();

// 2. Implementation: using best practices

var BP = function(listOfParams) {
	for (var i = 0, x = listOfParams[0].length; i < x; i++) {
		listOfParams[1].push(new Person(listOfParams[0][i], 101));
	}
}

var BPtest = new SpeedTest(BP, listsForTests, 100000);
BPtest.startTest();