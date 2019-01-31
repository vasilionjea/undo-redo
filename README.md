# undo-redo
Experimenting with undo/redo in JavaScript.

```javascript
const history = new HistoryManager();

this.history.add({
  undo: () => { /* undo something */ },
  redo: () => { /* redo something */ }
});
```
