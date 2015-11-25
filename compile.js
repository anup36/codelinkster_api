var bodyParser = require('body-parser');
var fs         = require('fs');
var process    = require('child_process');
var console    = require('rangoli');


function Compiler() {
	// var fileWrite, fileRead;
	saveCodeRun = function(code, lang,cb){
		if(code && lang == 'python'){
			fileWrite = 'hello.py';
			fileRead  = 'hello.py';
		} else if(code && lang == 'node'){
			fileWrite = 'hello.js';
			fileRead  = 'hello.js';
		} else if(code && lang == 'ruby'){
			fileWrite = 'hello.rb';
			fileRead  = 'hello.rb';
		} else if(code && lang == 'c'){
			fileWrite = 'hello.c';
			fileRead  = 'hello.c';
		}

		if(code && lang && fileRead && fileWrite) {	
			console.warn(code);
		    fs.writeFile(fileWrite, code, function (err, data){
		    	console.prime(code);
		        if(err) {
		          	console.err("error to wrting file",err);
		          	cb(err);
			    }   else {
			          	console.succ('file written', code);
			          	readCodeFile(fileRead, 'utf8', function(err, data){
				          	if(err) {
				          		console.err("read file --->",err);
				          		cb(err);
				          	} else {
				          		console.warn("rad file succ", data);
				          		cb(null, data);
				          	}	
			          	})
			        }
		    });
		}   
	}

	readCodeFile = function(code, lang, cb){
	 	fs.readFile(fileRead, 'utf8', function (err,data){
		    if(err) {
		        cb(err);
		    } else {
		        cb(null, data);
		    }
		});
	}
}

Compiler.prototype.pythonCompile = function(code, lang, cb){
	// return true;
	saveCodeRun(code, lang, function (err, res){
		if(err){
			console.log(err);
			cb(err);
		} else {
			console.log(res);
			process.exec('python hello.py', function (err,stdout,stderr){
	            if(err) {
	              console.warn("No Compiling",stderr);
	              var err = stderr.replace(/\n|\r/g,"")
	              cb(stderr);
	            } else {
	              console.info("Python Code Compile Successfull-------->",stdout);
	              // var result = {data: stdout};
	              var result = stdout.replace(/\n|\r/g, "");
	              cb(null, result);
	            }
            });
		}
	});
	 	
}

Compiler.prototype.nodeCompile = function(code, lang, cb){
	// return true;
	saveCodeRun(code, lang, function (err, res){
		if(err){
			console.log(err);
			cb(err);
		} else {
			console.log('code ready to exec--->',res);
			process.exec('node hello.js', function (err,stdout,stderr){
				console.err(err);
				console.succ(stderr);
				console.prime(stdout);
				if(err || stderr){
	              console.warn("No Compiling",stderr, err);
	              
	              cb(err);
				} else {
	              console.info("Node Code Compile Successfull-------->",stdout);
	              // var result = {data: stdout};
	              console.prime(stdout);
	              var result = stdout;
	              cb(null, result);
	            }
            });
		}
	});
	 	
}

Compiler.prototype.rubyCompile = function(code, lang, cb){
	// return true;
	saveCodeRun(code, lang, function (err, res){
		if(err){
			console.log(err);
			cb(err);
		} else {
			console.log('code ready to exec--->',res);
			process.exec('ruby hello.rb', function (err,stdout,stderr){
				console.err(err);
				console.succ(stderr);
				console.prime(stdout);
				if(err || stderr){
	              console.warn("No Compiling",stderr, err);
	              
	              cb(err);
				} else {
	              console.info("ruby Code Compile Successfull-------->",stdout);
	              // var result = {data: stdout};
	              console.prime(stdout);
	              var result = stdout;
	              cb(null, result);
	            }
            });
		}
	});
	 	
}

Compiler.prototype.cCompile = function(code, lang, cb){
	// return true;
	saveCodeRun(code, lang, function (err, res){
		if(err){
			console.log(err);
			cb(err);
		} else {
			console.log('code ready to exec--->',res);
			process.exec('gcc hello.c -o hello', function (err,stdout,stderr){
				console.err(err);
				console.succ(stderr);
				console.prime(stdout);
				if(err || stderr){
	              // console.warn("No Compiling",stderr);
	              // console.err("No Compiling",err);
	              cb(stderr);
				} else {
	              console.info("C Code Compile Successfull-------->",stdout);
	              process.exec('./hello', function (err, stdout, stderr){
	              	// var result = {data: stdout};
	              // console.prime(stdout);
	              // var result = stdout;
	              	cb(null, stdout);
	              })
	              
	            }
            });
		}
	});
	 	
}

module.exports = {
	python : function(code, lang, cb) {
		var compiler = new Compiler();
		compiler.pythonCompile(code, lang, function(err, res){
            if(err) {
              cb(err.replace(/\n|\r/g, ""));
            } else {
              cb(null, res.replace(/\n|\r/g, ""));
            }
		}); 
	}, 
	node : function(code, lang, cb){
		var compiler = new Compiler();
			compiler.nodeCompile(code, lang, function(err, res){
	            if(err) {
	              cb(err);
	            } else {
	              cb(null, res);
	         }
		});

	},
	ruby : function(code, lang, cb){
		var compiler = new Compiler();
			compiler.rubyCompile(code, lang, function(err, res){
	            if(err) {
	              cb(err);
	            } else {
	              cb(null, res);
	         }
		});

	},
	c : function(code, lang, cb){
		var compiler = new Compiler();
			compiler.cCompile(code, lang, function(err, res){
	            if(err) {
	              cb(err);
	            } else {
	              cb(null, res);
	         }
		});

	} 	 
}
