(function() {
	var node = document.createElement('script');
	node.setAttribute('src', './ver.js?ver=' + Math.random());
	document.getElementById('body').appendChild(node);
})();