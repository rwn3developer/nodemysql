//mysqli
var mysql = require('mysql');

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "nodejs"
    });

module.exports.admindata = (req,res) => {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    var sql = "INSERT INTO `admin`(name, email, password) VALUES ('"+name+"','"+email+"','"+password+"')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        return res.json({'status' : '1','messege':'insert record'});
  });

}

// module.exports.viewdata = (req,res) => {
//     var sql = "SELECT * FROM `admin`";
//     con.query(sql,(err,result)=>{
//         if(err){
//             console.log("something wrong");
//             return false;
//         }
//         return res.json({'status' : '1','data':result});
//     })
// }

