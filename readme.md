## Usage
ES6
```js
import Kopeechka from "kopeechka-js";
const kopeechka = new Kopeechka("your-api-key-here");

(async () => {
	// get balance
	const balance = await kopeechka.balance();

	// get new email
	const emailData = await kopeechka.getEmail({ site: "discord.com" }); // parameters are the same as in the official documentation
	
	// get response to email
	const emailMessageData = await kopeechka.getMessage({ id: "job id here"});
})():
