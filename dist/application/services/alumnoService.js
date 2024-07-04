"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumnoService = void 0;
const alumno_1 = __importDefault(require("../../domain/models/alumno"));
class AlumnoService {
    constructor(alumnoRepository) {
        this.alumnoRepository = alumnoRepository;
    }
    createAlumno(name, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Creating alumno:", name, email);
            const alumno = new alumno_1.default(null, name, email, password);
            return yield this.alumnoRepository.save(alumno);
        });
    }
    getAlumnoById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Getting alumno by ID:", id);
            return yield this.alumnoRepository.findById(id);
        });
    }
    getAllAlumnos() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Getting all alumnos");
            return yield this.alumnoRepository.findAll();
        });
    }
    updateAlumno(id, name, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Updating alumno:", id, name, email);
            const alumno = new alumno_1.default(id, name, email, password);
            return yield this.alumnoRepository.update(alumno);
        });
    }
    deleteAlumnoById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Deleting alumno by ID:", id);
            return yield this.alumnoRepository.deleteById(id);
        });
    }
}
exports.AlumnoService = AlumnoService;
