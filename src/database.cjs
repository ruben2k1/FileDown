const mysql = require('mysql');
const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'filedown'
})

const dual1 = async () => {
    return new Promise((resolve, reject) => pool.query('SELECT 1+1 FROM DUAL;', (error, results, fields) => {
        if (error){
          reject(error);
        }else{
          resolve(results);
        }
        
    }));
}

const dual2 = async() => {
    let datos = await dual1();
    console.log(datos);
}

dual2();

module.exports = { dual2 };