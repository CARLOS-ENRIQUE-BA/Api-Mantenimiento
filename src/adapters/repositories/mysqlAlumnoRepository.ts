import { IAlumnoRepository } from '../../domain/repositories/IAlumnoRepository';
import Alumno from '../../domain/models/alumno';
import connectMySQL from '../../infrastructure/database/mysqlConnection';
import { RowDataPacket, OkPacket, FieldPacket } from 'mysql2';

class MySQLAlumnoRepository implements IAlumnoRepository {
    async save(alumno: Alumno): Promise<Alumno> {
        const connection = await connectMySQL();
        const [result]: [OkPacket, FieldPacket[]] = await connection.execute(
            'INSERT INTO alumnos (name, email, password) VALUES (?, ?, ?)',
            [alumno.name, alumno.email, alumno.password]
        );
        alumno.id = result.insertId.toString(); 
        return alumno;
    }

    async findById(id: string): Promise<Alumno | null> {
        const connection = await connectMySQL();
        const [rows]: [RowDataPacket[], FieldPacket[]] = await connection.execute(
            'SELECT * FROM alumnos WHERE id = ?',
            [id]
        );
        if (rows.length === 0) return null;
        const row = rows[0];
        return new Alumno(row.id.toString(), row.name, row.email, row.password);
    }

    async findAll(): Promise<Alumno[]> {
        const connection = await connectMySQL();
        const [rows]: [RowDataPacket[], FieldPacket[]] = await connection.execute('SELECT * FROM alumnos');
        return rows.map(row => new Alumno(row.id.toString(), row.name, row.email, row.password));
    }

    async update(alumno: Alumno): Promise<Alumno> {
        const connection = await connectMySQL();
        await connection.execute(
            'UPDATE alumnos SET name = ?, email = ?, password = ? WHERE id = ?',
            [alumno.name, alumno.email, alumno.password, alumno.id]
        );
        return alumno;
    }

    async deleteById(id: string): Promise<void> {
        const connection = await connectMySQL();
        await connection.execute('DELETE FROM alumnos WHERE id = ?', [id]);
    }
}

export default MySQLAlumnoRepository;
