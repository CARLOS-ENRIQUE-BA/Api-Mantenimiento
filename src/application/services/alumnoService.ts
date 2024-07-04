import { IAlumnoRepository } from '../../domain/repositories/IAlumnoRepository';
import Alumno from '../../domain/models/alumno';

export class AlumnoService {
    private alumnoRepository: IAlumnoRepository;

    constructor(alumnoRepository: IAlumnoRepository) {
        this.alumnoRepository = alumnoRepository;
    }

    async createAlumno(name: string, email: string, password: string): Promise<Alumno> {
        console.log("Creating alumno:", name, email);
        const alumno = new Alumno(null, name, email, password);
        return await this.alumnoRepository.save(alumno);
    }

    async getAlumnoById(id: string): Promise<Alumno | null> {
        console.log("Getting alumno by ID:", id);
        return await this.alumnoRepository.findById(id);
    }

    async getAllAlumnos(): Promise<Alumno[]> {
        console.log("Getting all alumnos");
        return await this.alumnoRepository.findAll();
    }

    async updateAlumno(id: string, name: string, email: string, password: string): Promise<Alumno> {
        console.log("Updating alumno:", id, name, email);
        const alumno = new Alumno(id, name, email, password);
        return await this.alumnoRepository.update(alumno);
    }

    async deleteAlumnoById(id: string): Promise<void> {
        console.log("Deleting alumno by ID:", id);
        return await this.alumnoRepository.deleteById(id);
    }
}
