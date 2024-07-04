import { IAlumnoRepository } from '../domain/repositories/IAlumnoRepository';
import MongoAlumnoRepository from '../adapters/repositories/mongoAlumnoRepository';
import MySQLAlumnoRepository from '../adapters/repositories/mysqlAlumnoRepository';
import { AlumnoService } from '../application/services/alumnoService';
import connectMongoDB from './database/mongoConnection';
import connectMySQL from './database/mysqlConnection';
import { S3StorageRepository } from '../adapters/repositories/s3StorageRepository';
import { LocalStorageRepository } from '../adapters/repositories/localStorageRepository';
import { IStorageRepository } from '../domain/repositories/IStorageRepository';
import { IMaestrosRepository } from '../domain/repositories/IMaestrosRepository';
import MongoMaestrosRepository from '../adapters/repositories/mongoMaestrosRepository';
import MySQLMaestrosRepository from '../adapters/repositories/mysqlMaestrosRepository';
import { MaestrosService } from '../application/services/maestrosService';

const useMongoDB: boolean = process.env.USE_MONGODB === 'true';
const useS3: boolean = process.env.USE_S3 === 'true';

let alumnoRepository: IAlumnoRepository;
let maestrosRepository: IMaestrosRepository;

if (useMongoDB) {
    connectMongoDB();
    alumnoRepository = new MongoAlumnoRepository();
    maestrosRepository = new MongoMaestrosRepository();
} else {
    connectMySQL();
    alumnoRepository = new MySQLAlumnoRepository();
    maestrosRepository = new MySQLMaestrosRepository();
}

let storageRepository: IStorageRepository;

if (useS3) {
    storageRepository = new S3StorageRepository();
} else {
    storageRepository = new LocalStorageRepository();
}

const alumnoService = new AlumnoService(alumnoRepository);
const maestrosService = new MaestrosService(maestrosRepository);

export { alumnoService, maestrosService, storageRepository };
