(function() {
	var node = document.createElement('script');
	// 此处使用插件维护版本号
	var version = '';
	node.setAttribute('src', './app'+ version +'.bundle.js');
	document.getElementById('body').appendChild(node);
})();