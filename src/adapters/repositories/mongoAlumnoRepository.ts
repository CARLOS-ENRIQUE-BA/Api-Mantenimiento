import { IAlumnoRepository } from '../../domain/repositories/IAlumnoRepository';
import Alumno from '../../domain/models/alumno';
import { IAlumnoDocument, AlumnoModel } from './schemas/alumnoSchema';

class MongoAlumnoRepository implements IAlumnoRepository {
    async save(alumno: Alumno): Promise<Alumno> {
        const alumnoModel = new AlumnoModel(alumno);
        const savedAlumno = await alumnoModel.save();
        return new Alumno(savedAlumno.id, savedAlumno.name, savedAlumno.email, savedAlumno.password);
    }

    async findById(id: string): Promise<Alumno | null> {
        const alumno = await AlumnoModel.findById(id);
        if (!alumno) return null;
        return new Alumno(alumno.id, alumno.name, alumno.email, alumno.password);
    }

    async findAll(): Promise<Alumno[]> {
        const alumnos: IAlumnoDocument[] = await AlumnoModel.find();
        return alumnos.map((alumno: IAlumnoDocument) => new Alumno(alumno.id, alumno.name, alumno.email, alumno.password));
    }

    async update(alumno: Alumno): Promise<Alumno> {
        const updatedAlumno = await AlumnoModel.findByIdAndUpdate(alumno.id, alumno, { new: true });
        if (!updatedAlumno) throw new Error('Alumno not found');
        return new Alumno(updatedAlumno.id, updatedAlumno.name, updatedAlumno.email, updatedAlumno.password);
    }

    async deleteById(id: string): Promise<void> {
        await AlumnoModel.findByIdAndDelete(id);
    }
}

export default MongoAlumnoRepository;
