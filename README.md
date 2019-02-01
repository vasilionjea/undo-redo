# undo-redo
`experimental` A JavaScript implementation of undo-redo.

```javascript
const history = new HistoryManager();

history.add({
  undo: () => { /* undo something */ },
  redo: () => { /* redo something */ }
});
```

Live example: https://bit.ly/2TpJNVo
