import 'dotenv/config';
import mysql from 'mysql2/promise';

async function connect() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.NODE_ENV === 'production' ? process.env.DB_NAME_PRD :
                  process.env.NODE_ENV === 'development' ? process.env.DB_NAME_DEV :
                  process.env.DB_NAME_HML 
    });

    return connection;
}

export default connect;
