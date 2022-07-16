import connection from '../config/Database';

const executeQuery = (sql: string, params: Array<any> = []) => {

    return new Promise((resolve,reject) => {

        connection.execute(sql,params,(err,rows,fields) => {
            if(err) return reject(err);
            return resolve(rows); 
            // elvalor rows devuelve el resultado de la consulta
        })
    })
}

export default executeQuery;