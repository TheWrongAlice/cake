'use strict';

var cakeUtilities = {
isBestCake = function(type){
return (type == 'chocolate cake');
}
};

# I am a comment
var myCake = {
type: 'carrot cake',
size: 8
};

console.log(cakeUtilities.isBestCake(myCake));
