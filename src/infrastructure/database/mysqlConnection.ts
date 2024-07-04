// src/infrastructure/database/mysqlConnection.ts
import * as mysql from 'mysql2/promise';
import { Connection } from 'mysql2/promise';

const connectMySQL = async (): Promise<Connection> => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });
        console.log("Connected to MySQL database");
        return connection;
    } catch (error: any) {
        console.error("Error connecting to MySQL:", error.message);
        process.exit(1);
    }
};

export default connectMySQL;
