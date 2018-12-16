exports.reminderBotReceiver = (event, context) => {
	console.log('Event received: ', event);
	const pubSubMessage = event;
	const name = pubSubMessage.data ?
		Buffer.from(pubSubMessage.data, 'base64').toString() :
		'World';

	console.log(`Hello, ${name}!`);
};