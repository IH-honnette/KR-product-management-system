const database = require('../config/database');

const executeStoredProcedure = (procedureName, params, callback) => {
    database.query(`CALL ${procedureName} (${params.map(() => '?').join(', ')})`,
     params, (error, results) => {
        if(error) {
            console.error(error);
            callback(error, null);
        }else {
            callback (null, results[0]);
        }

     } );
}

module.exports = {
    executeStoredProcedure,
}