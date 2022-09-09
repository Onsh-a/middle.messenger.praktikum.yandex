export class EventBus {
  private readonly listeners: Record<string, Array<() => void>> = {};

  on(event: string, callback: Function) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    // @ts-ignore
    this.listeners[event].push(callback);
  }

  off(event: string, callback: Function) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback,
    );
  }

  emit(event: string, ...args: unknown[]) {
    if (!this.listeners[event]) {
      throw new Event(`Нет события: ${event}`);
    }

    this.listeners[event].forEach((listener) => {
      // @ts-ignore
      listener(...args);
    });
  }
}
