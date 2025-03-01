chrome.runtime.onInstalled.addListener(() => {
  console.log("WiShield extension installed");
});

// Example: Intercept and log all requests
chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    console.log("Intercepted request:", details.url);
    // Here you can add logic to encrypt data before it leaves the device
    return { cancel: false };
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
