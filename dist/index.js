"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoPlayer = void 0;
class VideoPlayer {
    constructor(selector) {
        const element = document.querySelector(selector);
        if (!element || !(element instanceof HTMLVideoElement)) {
            throw new Error('Invalid video element selector');
        }
        this.videoElement = element;
    }
    play() {
        this.videoElement.play();
    }
    pause() {
        this.videoElement.pause();
    }
    setSource(src) {
        this.videoElement.src = src;
    }
}
exports.VideoPlayer = VideoPlayer;
