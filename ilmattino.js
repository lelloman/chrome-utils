(function() {
  var element = document.getElementById("paywall_wrapper");
  if(element != undefined) {
    element.parentNode.removeChild(element);
    document.body.style = "";
  }
})();
