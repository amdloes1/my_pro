var mysql = require('mysql');
var http = require('http');
var fs = require('fs');
var file_save = require("formidable");
http.createServer(function (req, res) 
{


    if (req.url == '/my_form_data') {
        var form = new file_save.IncomingForm();
        form.parse(req, function (err, fields, files) {
            
            var fullname = fields.fullname
            var phone = fields.phonenumber
            var email = fields.email
            var question = fields.question
            var Low_as = fields.Low_as
            var High_as = fields.High_as
            var query = "INSERT INTO info VALUES ('" + fullname  + "'," + phone + ","+ email +","+ question +","+ Low_as +","+ High_as +"')";
            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "Mortaza01",
                database: "form"
              });
              con.connect(function(err) {
                if (err) throw err;
                con.query(query, function (err, result) {
                  if (err) throw err;
                  console.log("Result: " + result);
                  res.write('Data inserted to database');
                  res.end();
              });
              });
         });
    }
    else{
        
        fs.readFile('Form.html', function(err, data) {
            res.write(data)
            return res.end();
        });}
    
}).listen(8080);
