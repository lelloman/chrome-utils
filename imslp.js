(function() {
  var element = document.getElementById("sm_dl_wait");
  if(element != undefined) {
    var url = element.getAttribute("data-id");
    window.location = url;
  }
})();
