# fordelay
Javascript foreach with delay

## Install
```bash
yarn add fordelay
```

## Usage
```js
var fordelay = require("fordelay")

// fordelay(delay ms, items object or array, callable) returns a promise

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

```
Try on [RunKit](https://npm.runkit.com/fordelay)

## License

[MIT](https://github.com/melbahja/fordelay/blob/master/LICENSE) © [Mohamed Elbahja](https://git.io/mohamed)
