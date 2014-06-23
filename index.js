var fs = require('fs'),
	path = require('path'),
	serveStatic = require('serve-static'),
	port = process.env.PORT || 8080,
	dir = path.resolve('public'),
	app = require('express')();

app.use(require('compression')());

function serveEnvs() {
	var envs = {};
	for (var i in process.env) {
		if (process.env.hasOwnProperty(i) && i.substring(0, 4)==='PUB_') {
			envs[i.substring(4)] = process.env[i];
		}
	}
	try {
		fs.mkdirSync('__');
	} catch(err) {}
	fs.writeFileSync('__/env.json', JSON.stringify(envs));
	fs.writeFileSync('__/env.js', 'var __env=' + JSON.stringify(envs) + ';');
	return serveStatic('__');
}

app.use('/__', serveEnvs());

app.use(serveStatic(dir));

app.listen(port, function() {
	console.log('Serving files from '+dir+' on port '+port+'.');
});
