// src/domain/repositories/IAlumnoRepository.ts
import Alumno from '../models/alumno';

export interface IAlumnoRepository {
    save(alumno: Alumno): Promise<Alumno>;
    findById(id: string): Promise<Alumno | null>;
    findAll(): Promise<Alumno[]>;
    update(alumno: Alumno): Promise<Alumno>;
    deleteById(id: string): Promise<void>;
}
