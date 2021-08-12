const { Timer } = require('../build/index.js');

const test = new Timer(1628772086862, { actions: { event: 'test' } })

test.on('test', () => {
	console.log('OK');
})