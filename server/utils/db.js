import mysql from 'mysql';

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root', // The correct property name is 'user', not 'root'
  password: 'Mys3060100', // Replace with your MySQL password
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
