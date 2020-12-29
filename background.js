function openOutlinePage(url) {
	var newURL = "http://outline.com/" + url;
	chrome.tabs.create({ url: newURL });
};

chrome.contextMenus.removeAll();
chrome.contextMenus.create({
      title: "outline",
      contexts: ["link"],
      onclick: function(info, tab) {
        openOutlinePage(info["linkUrl"]);
      }
});

chrome.browserAction.onClicked.addListener(function(tab) {
	openOutlinePage(tab.url);
});
