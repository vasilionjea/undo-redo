class HistoryManager {
  get canUndo() {
    return this.index > -1;
  }

  get canRedo() {
    return this.index < this.history.length - 1;
  }

  constructor() {
    this.clear();
  }

  undo() {
    if (this.canUndo) {
      this.history[this.index].undo(); // items in history provide implementation for "undo"
      this.index -= 1;
    }
  }

  redo() {
    if (this.canRedo) {
      this.index += 1;
      this.history[this.index].redo(); // items in history provide implementation for "redo"
    }
  }

  add(item) {
    // Drop any items past the current one
    this.history = this.history.slice(0, this.index + 1);
    this.history.push(item);
    this.index += 1;
  }

  clear() {
    this.history = [];
    this.index = -1;
  }
}
