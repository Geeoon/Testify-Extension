chrome.storage.sync.get(['iframeUrl'], function(result) { 
    document.getElementById('testify-internal-iframe').setAttribute('src', result.iframeUrl);
});