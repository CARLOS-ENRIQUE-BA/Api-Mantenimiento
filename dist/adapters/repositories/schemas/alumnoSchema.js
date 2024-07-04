"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumnoModel = void 0;
const mongoose_1 = require("mongoose");
const alumnoSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});
const AlumnoModel = (0, mongoose_1.model)('Alumno', alumnoSchema);
exports.AlumnoModel = AlumnoModel;
