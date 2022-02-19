// Credit: https://stackoverflow.com/questions/15532791/getting-around-x-frame-options-deny-in-a-chrome-extension/69177790#69177790
const iframeHosts = [
  'google.com',
  'duckduckgo.com',
  'search.brave.com'
];
chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: iframeHosts.map((h, i) => i + 1),
    addRules: iframeHosts.map((h, i) => ({
      id: i + 1,
      condition: {
        domains: [chrome.runtime.id],
        urlFilter: `||${h}/`,
        resourceTypes: ['sub_frame'],
      },
      action: {
        type: 'modifyHeaders',
        responseHeaders: [
          {header: 'X-Frame-Options', operation: 'remove'},
          {header: 'Frame-Options', operation: 'remove'},
          {header: 'Content-Security-Policy', operation: 'remove'}
        ],
      },
    })),
  });
});

  // This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener((text) => {
  // Encode user input for special characters , / ? : @ & = + $ #
  var newURL = 'index.html?q=' + encodeURIComponent(text);
  chrome.tabs.create({ url:chrome.runtime.getURL( newURL )});
});