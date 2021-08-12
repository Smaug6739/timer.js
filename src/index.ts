import { EventEmitter } from 'events'

import ms from './convert';
import type { IOptions, IActions } from './typescript/interfaces';

class Timer extends EventEmitter {
	timestamp: number;
	actions: IActions | undefined;

	constructor(timestamp: number, options?: IOptions) {
		super()
		if (!timestamp) throw new TypeError('[PARAMETER_ERROR] The hour parameter is required.');
		const t = new Date(timestamp);
		this.timestamp = timestamp;
		this.actions = options?.actions;
		this._check()
		setInterval(this._check, 1800000)
	}
	private _check() {
		const newTimestamp = Date.now();
		const diff = this.timestamp - newTimestamp;
		if (diff < 1800000) {
			setTimeout(() => {
				if (this.actions?.event) {
					this.emit(this.actions.event);
				}
				if (this.actions?.function) {
					this.actions.function();
				}
			}, diff)
		}
	}
}

export { Timer };