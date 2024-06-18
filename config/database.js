import mysql from "mysql2";
import "dotenv/config";

// buat konfigurasi koneksi
const koneksi = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  multipleStatements: true,
});

// koneksi database
koneksi.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

export default koneksi;
