chrome.contextMenus.removeAll();
chrome.contextMenus.create({
      title: "outline",
      contexts: ["link"],
      onclick: function(info, tab) {
        var newURL = "http://outline.com/" + info["linkUrl"];
	chrome.tabs.create({ url: newURL });
      }
});
