import { IMaestrosRepository } from '../../domain/repositories/IMaestrosRepository';
import Maestros from '../../domain/models/maestros';
import connectMySQL from '../../infrastructure/database/mysqlConnection';
import { RowDataPacket, OkPacket, FieldPacket } from 'mysql2';

class MySQLMaestrosRepository implements IMaestrosRepository {
    async save(maestros: Maestros): Promise<Maestros> {
        const connection = await connectMySQL();
        const [result]: [OkPacket, FieldPacket[]] = await connection.execute(
            'INSERT INTO maestroses (name, description) VALUES (?, ?)',
            [maestros.name, maestros.description]
        );
        maestros.id = result.insertId.toString();
        return maestros;
    }

    async findById(id: string): Promise<Maestros | null> {
        const connection = await connectMySQL();
        const [rows]: [RowDataPacket[], FieldPacket[]] = await connection.execute(
            'SELECT * FROM maestroses WHERE id = ?',
            [id]
        );
        if (rows.length === 0) return null;
        const row = rows[0];
        return new Maestros(row.id.toString(), row.name, row.description);
    }

    async findAll(): Promise<Maestros[]> {
        const connection = await connectMySQL();
        const [rows]: [RowDataPacket[], FieldPacket[]] = await connection.execute('SELECT * FROM maestroses');
        return rows.map(row => new Maestros(row.id.toString(), row.name, row.description));
    }

    async update(maestros: Maestros): Promise<Maestros> {
        const connection = await connectMySQL();
        await connection.execute(
            'UPDATE maestroses SET name = ?, description = ? WHERE id = ?',
            [maestros.name, maestros.description, maestros.id]
        );
        return maestros;
    }

    async deleteById(id: string): Promise<void> {
        const connection = await connectMySQL();
        await connection.execute('DELETE FROM maestroses WHERE id = ?', [id]);
    }
}

export default MySQLMaestrosRepository;
