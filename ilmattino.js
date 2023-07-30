(function() {
	const removePaywall = function() {
		var element = document.getElementById("datawall");
		if(element == undefined) {
			element = document.getElementById("paywall_wrapper");
		}
		if(element != undefined) {
		element.parentNode.removeChild(element);
		document.body.style = "";
		}
  	}
	const removeBlur = function() {
		var element = document.getElementById("ppstyle");
		if (element != undefined) {
			element.parentNode.removeChild(element);
		}
	}
  	var paywallObserver = new MutationObserver(function(mutations) {
	    removePaywall();
	    removeBlur();
	});
	
	var config = { attributes: true, childList: true, characterData: true };
	paywallObserver.observe(document.body, config);
})();


