(function() {
	var node = document.createElement('script');
	// 此处维护版本号
	var version = '{{version}}';
	node.setAttribute('src', './'+ version +'/app.bundle.js');
	document.getElementById('body').appendChild(node);
})();