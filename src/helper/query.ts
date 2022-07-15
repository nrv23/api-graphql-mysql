import connection from '../config/Database';

const executeQuery = (sql: string, params: Array<any> = []) => {

     connection.execute(sql,params,(err,rows,fields) => {
         if(err) {
            return Promise.reject(err);
         }

         return Promise.resolve(rows); 

         // elvalor rows devuelve el resultado de la consulta
     })

}

export default executeQuery;