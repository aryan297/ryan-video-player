export declare class VideoPlayer {
    private videoElement;
    constructor(selector: string);
    play(): void;
    pause(): void;
    setSource(src: string): void;
}
