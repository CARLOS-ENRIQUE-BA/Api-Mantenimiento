import express from 'express';
import { createAlumno, getAlumnoById, getAllAlumnos, updateAlumno, deleteAlumnoById } from '../../adapters/controllers/alumnoController';
import { createMaestros, getMaestrosById, getAllMaestroses, updateMaestros, deleteMaestrosById } from '../../adapters/controllers/maestrosController'; 
import { upload } from '../../infrastructure/config/multerConfig';
import { StorageController } from '../../adapters/controllers/storageController';
import { storageRepository } from '../../infrastructure/diContainer';
import { StorageService } from '../../application/services/storageService';
import { MaestrosService } from '../../application/services/maestrosService'; 
import { maestrosService } from '../../infrastructure/diContainer'; 

const app = express();
app.use(express.json());

const storageService = new StorageService(storageRepository);
const storageController = new StorageController(storageService);

app.post('/upload', upload.single('file'), storageController.upload);
app.post('/api/alumnos', createAlumno);
app.get('/api/alumnos/:id', getAlumnoById);
app.get('/api/alumnos', getAllAlumnos);
app.put('/api/alumnos/:id', updateAlumno);
app.delete('/api/alumnos/:id', deleteAlumnoById);

app.post('/api/maestroses', createMaestros); 
app.get('/api/maestroses/:id', getMaestrosById); 
app.get('/api/maestroses', getAllMaestroses); 
app.put('/api/maestroses/:id', updateMaestros); 
app.delete('/api/maestroses/:id', deleteMaestrosById); 

export default app;
