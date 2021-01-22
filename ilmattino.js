(function() {
	const removePaywall = function() {
		var element = document.getElementById("datawall");
		if(element != undefined) {
		element.parentNode.removeChild(element);
		document.body.style = "";
		}
  	}
  	var observer = new MutationObserver(function(mutations) {
	    removePaywall();
	});
	
	var config = { attributes: false, childList: true, characterData: false }

	observer.observe(document.body, config);
})();
