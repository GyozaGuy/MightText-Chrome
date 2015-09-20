chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.htm', {
    id: 'mightytext',
    innerBounds: {width: 1000, height: 700}
  });
});
