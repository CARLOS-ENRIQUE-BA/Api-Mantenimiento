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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAlumnoById = exports.updateAlumno = exports.getAllAlumnos = exports.getAlumnoById = exports.createAlumno = void 0;
const diContainer_1 = require("../../infrastructure/diContainer");
const createAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    try {
        console.log("Request to create alumno:", name, email);
        const alumno = yield diContainer_1.alumnoService.createAlumno(name, email, password);
        res.status(201).json(alumno);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error in createAlumno:", error.message);
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
});
exports.createAlumno = createAlumno;
const getAlumnoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        console.log("Request to get alumno by ID:", id);
        const alumno = yield diContainer_1.alumnoService.getAlumnoById(id);
        res.status(200).json(alumno);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error in getAlumnoById:", error.message);
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
});
exports.getAlumnoById = getAlumnoById;
const getAllAlumnos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Request to get all alumnos");
        const alumnos = yield diContainer_1.alumnoService.getAllAlumnos();
        res.status(200).json(alumnos);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error in getAllAlumnos:", error.message);
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
});
exports.getAllAlumnos = getAllAlumnos;
const updateAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, email, password } = req.body;
    try {
        console.log("Request to update alumno:", id, name, email);
        const alumno = yield diContainer_1.alumnoService.updateAlumno(id, name, email, password);
        res.status(200).json(alumno);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error in updateAlumno:", error.message);
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
});
exports.updateAlumno = updateAlumno;
const deleteAlumnoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        console.log("Request to delete alumno by ID:", id);
        yield diContainer_1.alumnoService.deleteAlumnoById(id);
        res.status(204).send();
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error in deleteAlumnoById:", error.message);
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
});
exports.deleteAlumnoById = deleteAlumnoById;
