(function() {
	var node = document.createElement('script');
	// 此处维护版本号
	var version = 'build/a0c746c72906857d8528';
	node.setAttribute('src', './'+ version +'/app.bundle.js');
	document.getElementById('body').appendChild(node);
})();