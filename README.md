# global-keys
This is a wrapper around my other program [`keys`](https://github.com/QuantumCoded/keys) used to get access to global keypress data. This is a *very* simple implementation and will hopefully be improved and fleshed out later.

```js
const keys = require('global-keys');
const keyStream = new keys.KeyStream();

keyStream.on('data', state => {
	console.log(state); // array of ascii codes
});

keyStream.on('error', error => {
	// handle errors
});
```
