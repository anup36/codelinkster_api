var bodyParser = require('body-parser');
var fs         = require('fs');
var process    = require('child_process');
var console    = require('rangoli');


module.exports = {

	python : function(code, cb) {
		//Writing the coding into file
	    fs.writeFile('hello.py', code, function(err,data){
	        if(err) {
	          console.info("error to wrting file",err);
	          cb(err);
	        } else {
	          console.info("File written Successfull",data);
	        }
	      });

      	// Reading the Coding File
	    fs.readFile('hello.py', 'utf8', function (err,data){
	        if(err) {
	          console.info("Error to reading file",err);
	          cb(err);
	        } else {
	          console.info("FIle Read Successfull",data);
	          var data = data;
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
}