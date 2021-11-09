var mysql = require('mysql');

var conexion = mysql.createConnection({
    host: 'localhost'
    , database: 'usuarios_db'
    , user: 'root'
    , password: ''
});

conexion.connect(function (error) {
    if (error) {
        throw error;
    }
    else {
        console.log('CONEXION EXISTOSA');
    }
});

conexion.query('SELECT * FROM usuarios_10', function(error, results, fields){
    if (error) {
        throw error;
    }
    else {
        results.forEach(result => {
            console.log(result);
        });
    }
});

conexion.end();