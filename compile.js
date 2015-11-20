var bodyParser = require('body-parser');
var fs         = require('fs');
var process    = require('child_process');
var console    = require('rangoli');


function Compiler() {

	saveCodeRun = function(code, lang,cb){
		if(code && lang == 'python') {	
			console.warn(code);
		    fs.writeFile('hello.py', code, function (err, data){
		    	console.prime(code);
		        if(err) {
		          	console.err("error to wrting file",err);
		          	cb(err);
			    }   else {
			          	console.succ('file written', code);
			          	readCodeFile('hello.py', 'utf8', function(err, data){
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
	 	fs.readFile('hello.py', 'utf8', function (err,data){
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
	}  	 
}
// function python(code, lang, cb) {
// 		var objReadWrite = new ReadWrite(code, lang);
// 		console.succ(objReadWrite.compile());
// 	}


// module.exports = {

	// python : function(code, lang, cb) {
	// 	var objReadWrite = new ReadWrite(code, lang);
	// 	console.warn(objReadWrite.compile());



		//Writing the coding into file
	    // fs.writeFile('hello.py', code, function(err,data){
	    //     if(err) {
	    //       console.info("error to wrting file",err);
	    //       cb(err);
	    //     } else {
	    //       console.info("File written Successfull",data);
	    //     }
	    //   });

     //  	// Reading the Coding File
	    // fs.readFile('hello.py', 'utf8', function (err,data){
	    //     if(err) {
	    //       console.info("Error to reading file",err);
	    //       cb(err);
	    //     } else {
	    //       console.info("FIle Read Successfull",data);
	    //       var data = data;
	          // process.exec('python hello.py', function (err,stdout,stderr){
	            // if(err) {
	            //   console.warn("No Compiling",stderr);
	            //   var err = stderr.replace(/\n|\r/g,"")
	            //   cb(stderr);
	            // } else {
	            //   console.info("Python Code Compile Successfull-------->",stdout);
	            //   // var result = {data: stdout};
	            //   var result = stdout.replace(/\n|\r/g, "");
	            //   cb(null, result);
	            // }
	          // });
	    //     }
	    // });
	// }
// }