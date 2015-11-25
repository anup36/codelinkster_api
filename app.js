var express    = require('express');
var bodyParser = require('body-parser');
var console = require('rangoli');
var compile = require('./compile');
var app = new express();

var urlencodedParser = bodyParser.urlencoded({ extended:false });

//FOr allowing origin and allow master
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//nastay code start from herer
app.use(express.static('public'));


app.get('/',function (req,res){
  console.log("Go to Get HomePage Request");
  res.send("HEllo world");
});

app.get('/index.html',function (req,res){
  res.sendFile( __dirname + "/" + "index.html");
});

app.get('/code.html',function (req,res){
  // console.log(req.query)
	res.sendFile( __dirname + "/" + "code.html");
});


//Python Compiling Code
app.post('/python', urlencodedParser, function (req, res){
    var code = req.body.code, status;
    code = code.trim();
    var status = code.length <=0 ? console.err("No Data Found") : status = "active";
    var lang = "python";
    if(code!=undefined && code!=null && status=="active"){
      compile.python(code, lang, function(err, data){
        if(err){
          res.status(404).json(err);
        } else {
          res.status(200).json(data);
        }
      });
    } else {
        res.json("NO data found");
        res.end();
    }
});

// Node Compiling Code
app.post('/node', urlencodedParser, function (req, res){
  var code = req.body.code, status;
  code = code.trim();
  console.log(code);
  var status = code.length <=0 ? console.err("No Data Found") : status = "active";
  var lang = "node";
    if(code!=undefined && code!=null && status=="active"){
      compile.node(code, lang, function(err, data){
        if(err){
          res.status(404).json(err);
        } else {
          res.status(200).json(data);
        }
      });
    } else {
        res.json("NO data found");
        res.end();
    }  
});

// Ruby Compiled COde
app.post('/ruby', urlencodedParser, function (req, res){
  var code = req.body.code, status;
  code = code.trim();
  console.log(code);
  var status = code.length <=0 ? console.err("No Data Found") : status = "active";
  var lang = "ruby";
    if(code!=undefined && code!=null && status=="active"){
      compile.ruby(code, lang, function(err, data){
        if(err){
          res.status(404).json(err);
        } else {
          res.status(200).json(data);
        }
      });
    } else {
        res.json("NO data found");
        res.end();
    }  
});
//C Code
app.post('/c', urlencodedParser, function (req, res){
  var code = req.body.code, status;
  code = code.trim();
  console.log(code);
  var status = code.length <=0 ? console.err("No Data Found") : status = "active";
  var lang = "c";
    if(code!=undefined && code!=null && status=="active"){
      compile.c(code, lang, function(err, data){
        if(err){
          res.status(404).json(err);
        } else {
          res.status(200).json(data);
        }
      });
    } else {
        res.json("NO data found");
        res.end();
    }  
});


// Java Compiling Code
// app.post('/java', urlencodedParser, function (req, res){
//     var code = req.body.code;
//     console.log(code);  

//     fs.writeFile('hello.java', code, function (err,data){
//         if(err){
//             console.log("Error into writting File",err);
//             // res.send(err);
//             res.json({err: err});
//             res.end();
//         } else {
//             console.log("File Data written",data);
//         }
//     });

//     fs.readFile('hello.java', 'utf8', function (err, data){
//         if(err){
//             console.log("Error in reading Data",err);
//             res.json({err: err});
//             // res.send(err);
//             res.end();
//         } else {
//             console.log("Data Read Successfull",data);
//             var data = data;
//             process.exec('javac hello.java', function (err, stdout, stderr){
//                 if(err){
//                     console.log("COmpiling Error", stderr);
//                     res.json({compileError: stderr});
//                     // res.send(stderr);
//                     res.end();
//                 } else {
//                     console.log("Compile Successfull", stdout);
//                     process.exec('java hello', function (err, stdout, stderr){
//                         if(err) {
//                             // console.log("Java is compile", stderr);
//                             res.json({err: stderr});
//                             // res.send(stderr);
//                             res.end();
//                         } else {
//                             console.log("Java OUPT", stdout);
//                             // res.send(stdout);
//                             res.json({output:stdout});
//                             res.end();
//                         }
//                     });  
//                 }
//             });
//         }
//     })
// })
// app.get('/process_get',function (req,res){
//   response = {
//     first_name :req.query.first_name,
//     last_name  :req.query.last_name
//   };
//   console.log(response);
//   res.end(JSON.stringify(response));
// })
// Index For Post Page
// app.post('/process_post',urlencodedParser, function (req,res){
//   console.log(req.body);
  
//   response = {
//     first_name : req.body.first_name,
//     last_name  : req.body.last_name
//   };
//   console.log(response);
//   res.send(JSON.stringify(response));
// })

// var server = app.listen(8080,function (){
//   var host = server.address().adress
//   var port = server.address().port

  console.log("Example app listening at http://%s:%s");
// });

module.exports = app;

