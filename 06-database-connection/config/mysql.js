import mysql from "mysql2/promise";

let mysqlDB;

const connectMySQL = async () => {
  try {
    mysqlDB = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: process.env.MYSQL_PASSWORD,
      database: "sqldb",
    });

    console.log("MySQL Connected ✅");

    // create table if not exists
    await mysqlDB.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50),
        email VARCHAR(50) UNIQUE
      )
    `);
  } catch (err) {
    console.error("MySQL Error ❌", err);
    process.exit(1);
  }
};

export { connectMySQL, mysqlDB };
