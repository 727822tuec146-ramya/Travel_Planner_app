const mysql      = require('mysql2');

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true, // defaults: connectionLimit: 10, queueLimit: 0,
});

/* connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + connection.threadId);
});
// Close the database connection when the application exits
process.on('exit', () => {
    connection.end();
    console.log('Database connection closed');
}); */
module.exports = connection;