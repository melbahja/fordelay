
var fordelay = require("./index.js")


var items = [
	"0 after 0s", 
	"1 after 2s",
	"2 after 4s",
	"3 after 6s"
]

fordelay(2000, items, function(key, value)
{
	console.log(value)

}).then(() => console.info("done"))


// fordelay(1000, {zero: "zero form object", one: "one from object after 1s"}, (k, v) => console.log(v));
