# fordelay
JS for loops with delay

## Install
```bash
yarn add fordelay
```

## Usage
```js
import fordelay from "fordelay"

// fordelay(delay ms, items object or array, callable)

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

