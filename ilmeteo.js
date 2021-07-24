(function() {
	const removePaywall = function() {
		var elements = document.getElementsByClassName("fc-ab-root");
        var repost = true;
		if(elements != undefined) {
            for (var i =0;i<elements.length;i++) {
                const ele = elements[i];
                ele.parentNode.removeChild(ele);
                repost = false;
            }
        }
        if(repost) {
            setTimeout(removePaywall, 2000)
        }
  	}
    setTimeout(removePaywall, 100)
})();


