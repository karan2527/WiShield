console.log("WiShield content script loaded");

// Example: Log when the content script is loaded
chrome.runtime.sendMessage({ action: "contentScriptLoaded" });
