import mysql, { QueryError } from "mysql2";

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'nvm23',
    password: 'Nvm231191--@',
    database: "apiGraphqlPractica"
  });

  connection.connect((err) => {
    if(err) {
        console.log({err});
        process.exit(0);
    }

    console.log("Conexion existosa con id ", connection.threadId);
  });


  export default connection;