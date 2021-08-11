import { IOptions } from './typescript/interfaces';

class Timer {
	timestamp: number;
	constructor(timestamp: number, options?: IOptions) {
		if (!timestamp || typeof timestamp !== 'number') throw new TypeError('[PARAMETER_ERROR] The hour parameter is required.');
		this.timestamp = timestamp;
		this._check()
		setInterval(this._check, 1800000)
	}
	private _check() {
		const newTimestamp = Date.now();
		const diff = this.timestamp - newTimestamp;
		if (diff < 1800000) {
			setTimeout(() => console.log(new Date()), diff)
		}
	}
}

export { Timer };