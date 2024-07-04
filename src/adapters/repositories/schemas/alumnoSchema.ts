import { Schema, model, Document } from 'mongoose';

interface IAlumnoDocument extends Document {
    name: string;
    email: string;
    password: string;
}

const alumnoSchema = new Schema<IAlumnoDocument>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const AlumnoModel = model<IAlumnoDocument>('Alumno', alumnoSchema);

export { IAlumnoDocument, AlumnoModel };
