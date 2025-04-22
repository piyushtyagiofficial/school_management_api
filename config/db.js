const mysql = require("mysql2");
const dotenv = require("dotenv");
const fs = require("fs");

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    // Ensure the path exists and the certificate is in PEM format
    rejectUnauthorized: false,
    ca: fs.readFileSync(process.env.DB_CA_CERTS)
  }
});

connection.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err.message);
    process.exit(1); // Exit the app if unable to connect
  }
  console.log("✅ Connected to MySQL with SSL");
});

module.exports = connection;
