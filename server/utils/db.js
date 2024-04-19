import mysql from 'mysql';

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root1234',
  database: 'employee'
});

con.connect(function(err) {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected successfully to the database');
  }
});

export default con;