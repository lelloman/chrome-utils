(function() {
    const removePaywall = function() {
		const elements_to_remove = document.getElementsByClassName("bck-adblock is--active");
        while (elements_to_remove.length > 0) {
            elements_to_remove[0].remove();
        }

        setTimeout((function(){
            document.getElementsByTagName("html")[0].classList.remove("has--adblock");
        }), 1000);

        console.log("Hello corriere");
  	}
  	var observer = new MutationObserver(function(mutations) {
	    removePaywall();
	});
	
	var config = { attributes: false, childList: true, characterData: false }

	observer.observe(document.body, config);
})();


