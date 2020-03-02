/*
    Version: 1.0.0
    Author: Mohamed Elbahja (http://git.io/mohamed)
    Website: https://elbahja.me
    License: MIT
*/

module.exports = function(delay, items, callable)
{
	"use strict";

	let pos = 0;
	let isObject = (typeof items === 'object' && items instanceof Object)
	let iterable = isObject ? Object.keys(items) : items

	return new Promise((resolve) =>
	{
		for (var i=1; i <= iterable.length; i++)
		{
			setTimeout(() =>
			{
				let key = isObject ? iterable[pos] : pos

				pos++;

				callable(key, items[key])

				if (pos === iterable.length) resolve()

			}, (i * delay) - delay);
		}
	})
}
