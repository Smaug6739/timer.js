"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
const events_1 = require("events");
class Timer extends events_1.EventEmitter {
    constructor(timestamp, options) {
        super();
        if (!timestamp)
            throw new TypeError('[PARAMETER_ERROR] The hour parameter is required.');
        const t = new Date(timestamp);
        this.timestamp = timestamp;
        this.actions = options?.actions;
        this._check();
        setInterval(this._check, 1800000);
    }
    _check() {
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
            }, diff);
        }
    }
}
exports.Timer = Timer;
