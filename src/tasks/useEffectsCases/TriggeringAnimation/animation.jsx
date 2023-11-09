export class FadeInAnimation {
  constructor(node) {
    this.node = node;
  }

  start(duration) {
    this.duration = duration;
    if (this.duration === 0) {
      // Jump to end immediately
      this.onProgress(1);
    } else {
      this.onProgress(0);
      // Start animating
      this.strtTime = performance.now();
      this.frimeId = requestAnimationFrame(() => this.onFrame());
    }
  }

  onFrame() {
    const timePassed = performance.now() - this.strtTime;
    const progress = Math.min(timePassed / this.duration, 1);
    this.onProgress(progress);
    if (progress < 1) {
      this.frimeId = requestAnimationFrame(() => this.onFrame());
    }
  }

  onProgress(progress) {
    this.node.style.opacity = progress;
  }

  stop() {
    cancelAnimationFrame(this.frimeId);
    this.startTime = null;
    this.frimeId = null;
    this.duration = 0;
  }
}
