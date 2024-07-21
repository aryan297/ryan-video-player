
# Video Player

A simple video player package built with TypeScript, providing basic video playback controls and additional features such as shuffling, seeking, and volume control.

## Installation

To install the package, use npm:

```bash
npm install ryan-video-player
```

## example source
import { VideoPlayer } from 'video-player';

const player = new VideoPlayer('#myVideoElement');

// Setting a single video source
player.setSource('path/to/video.mp4');
player.play();

// Setting a playlist
player.setPlaylist(['video1.mp4', 'video2.mp4', 'video3.mp4']);

// Advanced controls
player.shuffle();
player.next();
player.previous();
player.seek(30); // Seek to 30 seconds
player.volumeUp();
player.volumeDown();
player.stop();

// Adding an event listener
player.on('ended', () => {
  console.log('Video has ended.');
});


