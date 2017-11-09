"use strict";

var cakeUtilities = {
	isBestCake: function(type){
		return type === "chocolate cake";
	},
};

var myCake = {
	type: "carrot cake",
	size: 8,
};

console.log(cakeUtilities.isBestCake(myCake.type));
