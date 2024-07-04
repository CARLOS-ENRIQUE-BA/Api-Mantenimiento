import mongoose, { Document, Schema } from 'mongoose';

export interface IMaestrosDocument extends Document {
    name: string;
    description: string;
    // Puedes añadir más campos según sea necesario
}

const maestrosSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    // Define más campos aquí si es necesario
});

export const MaestrosModel = mongoose.model<IMaestrosDocument>('Maestros', maestrosSchema);
