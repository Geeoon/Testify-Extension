// Saves options to chrome.storage
function save_options() {
    var url = document.getElementById('iframe-url').value;
    var opacity = document.getElementById('iframe-opacity').value;
    chrome.storage.sync.set({
      iframeUrl: url,
      iframeOpacity: opacity
    }, function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
  }
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
        iframeUrl: '',
        iframeOpacity: 100
    }, function(items) {
        document.getElementById('iframe-url').value = items.iframeUrl;
        document.getElementById('iframe-opacity').value = items.iframeOpacity;
    });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
      save_options);