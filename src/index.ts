export class VideoPlayer {
    private videoElement: HTMLVideoElement;
    private playlist: string[] = [];
    private currentVideoIndex: number = 0;
  
    constructor(selector: string) {
      const element = document.querySelector(selector);
      if (!element || !(element instanceof HTMLVideoElement)) {
        throw new Error('Invalid video element selector');
      }
      this.videoElement = element;
    }
  
    play(): void {
      this.videoElement.play();
    }
  
    pause(): void {
      this.videoElement.pause();
    }
  
    stop(): void {
      this.videoElement.pause();
      this.videoElement.currentTime = 0;
    }
  
    setSource(src: string): void {
      this.videoElement.src = src;
    }
  
    setPlaylist(playlist: string[]): void {
      this.playlist = playlist;
      this.currentVideoIndex = 0;
      if (this.playlist.length > 0) {
        this.setSource(this.playlist[this.currentVideoIndex]);
      }
    }
  
    shuffle(): void {
      for (let i = this.playlist.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.playlist[i], this.playlist[j]] = [this.playlist[j], this.playlist[i]];
      }
      this.currentVideoIndex = 0;
      if (this.playlist.length > 0) {
        this.setSource(this.playlist[this.currentVideoIndex]);
      }
    }
  
    next(): void {
      if (this.playlist.length > 0) {
        this.currentVideoIndex = (this.currentVideoIndex + 1) % this.playlist.length;
        this.setSource(this.playlist[this.currentVideoIndex]);
        this.play();
      }
    }
  
    previous(): void {
      if (this.playlist.length > 0) {
        this.currentVideoIndex =
          (this.currentVideoIndex - 1 + this.playlist.length) % this.playlist.length;
        this.setSource(this.playlist[this.currentVideoIndex]);
        this.play();
      }
    }
  
    seek(time: number): void {
      this.videoElement.currentTime = time;
    }
  
    volumeUp(): void {
      this.videoElement.volume = Math.min(1, this.videoElement.volume + 0.1);
    }
  
    volumeDown(): void {
      this.videoElement.volume = Math.max(0, this.videoElement.volume - 0.1);
    }
  
    get currentTime(): number {
      return this.videoElement.currentTime;
    }
  
    get duration(): number {
      return this.videoElement.duration;
    }
  
    get volume(): number {
      return this.videoElement.volume;
    }
  
    on(event: string, callback: () => void): void {
      this.videoElement.addEventListener(event, callback);
    }
  }