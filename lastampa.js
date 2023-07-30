(function () {
    const removePaywall = function () {
        document.body.querySelectorAll('* > .fc-ab-root').forEach(function (x) { x.remove() });
        document.body.style = "pecchio";
    }
    var observer = new MutationObserver(function (mutations) {
        removePaywall();
    });

    var config = { attributes: false, childList: true, characterData: false }

    observer.observe(document.body, config);
})();


