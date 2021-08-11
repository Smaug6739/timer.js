"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
class Timer {
    constructor(timestamp, options) {
        if (!timestamp || typeof timestamp !== 'number')
            throw new TypeError('[PARAMETER_ERROR] The hour parameter is required.');
        this.timestamp = timestamp;
        this._check();
        setInterval(this._check, 1800000);
    }
    _check() {
        const newTimestamp = Date.now();
        const diff = this.timestamp - newTimestamp;
        if (diff < 1800000) {
            setTimeout(() => console.log(new Date()), diff);
        }
    }
}
exports.Timer = Timer;
