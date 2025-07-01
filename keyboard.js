document.getElementById('keyboard').innerHTML = ['↑','←','↓','→','Z','X','C'].map(key => {
  return `<button onclick="sendKey('${key}')">${key}</button>`;
}).join(' ');

function sendKey(k) {
  const e = new KeyboardEvent('keydown', { key: k });
  window.dispatchEvent(e);
}