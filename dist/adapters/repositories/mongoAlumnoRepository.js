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
const alumno_1 = __importDefault(require("../../domain/models/alumno"));
const alumnoSchema_1 = require("./schemas/alumnoSchema");
class MongoAlumnoRepository {
    save(alumno) {
        return __awaiter(this, void 0, void 0, function* () {
            const alumnoModel = new alumnoSchema_1.AlumnoModel(alumno);
            const savedAlumno = yield alumnoModel.save();
            return new alumno_1.default(savedAlumno.id, savedAlumno.name, savedAlumno.email, savedAlumno.password);
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const alumno = yield alumnoSchema_1.AlumnoModel.findById(id);
            if (!alumno)
                return null;
            return new alumno_1.default(alumno.id, alumno.name, alumno.email, alumno.password);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const alumnos = yield alumnoSchema_1.AlumnoModel.find();
            return alumnos.map((alumno) => new alumno_1.default(alumno.id, alumno.name, alumno.email, alumno.password));
        });
    }
    update(alumno) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedAlumno = yield alumnoSchema_1.AlumnoModel.findByIdAndUpdate(alumno.id, alumno, { new: true });
            if (!updatedAlumno)
                throw new Error('Alumno not found');
            return new alumno_1.default(updatedAlumno.id, updatedAlumno.name, updatedAlumno.email, updatedAlumno.password);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield alumnoSchema_1.AlumnoModel.findByIdAndDelete(id);
        });
    }
}
exports.default = MongoAlumnoRepository;
