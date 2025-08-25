function openOutlinePage(url) {
  var newURL = "http://outline.com/" + url;
  chrome.tabs.create({ url: newURL });
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "asdomar",
    title: "outline",
    contexts: ["link"],
  });
});
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "asdomar") {
    console.log("hello");
    openOutlinePage(info["linkUrl"]);
  }
});
