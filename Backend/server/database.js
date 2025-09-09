// server/database.js
import mysql from "mysql";

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "try",
    connectionLimit: 5
});

export default pool;


/*2 ways for creating connection
-> createConnection : u need to open and close the connection
-> createPool : can connect to many connection 
*/
