chrome.tabs.onCreated.addListener(function(tab) {
    if (tab.url === 'chrome://newtab/') {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['custom.js']
      });
    }
  });