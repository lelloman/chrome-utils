(function() {
setTimeout(function() {
  var newsApp = document.getElementsByTagName("news-app");
  if(newsApp.length > 0) {
    var shadowRoot = newsApp[0].shadowRoot;
    var articlePager = shadowRoot.getElementById("articlePager");
    var newsArticle = articlePager.getElementsByTagName("news-article");
    var newsShadow = newsArticle[0].shadowRoot
    var lastShadow = newsShadow.children[1].children[0].children[0].children[0].shadowRoot;
    var actualBody = lastShadow.children[lastShadow.children.length-2];
    var paywall = actualBody.getElementsByClassName("paywall")[0];
    paywall.removeAttribute("subscriptions-section");
    paywall.parentNode.removeChild(paywall.parentNode.children[0]);
  }
}, 2000);
})()
