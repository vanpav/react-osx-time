// @flow
type TickOptions = {
  throttle?: number,
};

export class Tick {
  listeners: Array<Function> = [];
  raf: AnimationFrameID;
  throttle: number;
  enabled: boolean = false;

  constructor(options: TickOptions = {}) {
    this.throttle = Number(options.throttle || 32);
  }

  run() {
    this.enabled = true;
    const start = +new Date();
    let prevFrame = 0;
    const loop = () => {
      const now = +new Date();
      const tick = now - start - prevFrame;
      if (tick >= this.throttle) {
        this.notify(tick);
        prevFrame = now - start;
      }
      this.raf = requestAnimationFrame(loop);
    };
    loop();
  }

  stop() {
    cancelAnimationFrame(this.raf);
    this.enabled = false;
  }

  subscribe(cb: Function) {
    if (this.listeners.indexOf(cb) > -1) return;
    this.listeners.push(cb);
    if (this.listeners.length > 0) {
      !this.enabled && this.run();
    }
  }

  unsubscribe(cb: Function) {
    const index = this.listeners.indexOf(cb);
    if (index !== -1) {
      this.listeners.splice(index, 1);
    }
    if (this.listeners.length === 0) this.stop();
  }

  notify(tick: number) {
    this.listeners.length > 0 && this.listeners.forEach(cb => cb(tick));
  }
}

export default new Tick();
