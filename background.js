chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create(
    'index.htm',
    {id: 'mightytext', height: 700, width: 1000}
  );
});
