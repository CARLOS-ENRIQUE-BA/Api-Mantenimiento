"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const expressApp_1 = __importDefault(require("../interfaces/http/expressApp"));
const PORT = parseInt(process.env.PORT || '3000', 10);
expressApp_1.default.listen(PORT, () => {
    console.log(`Server online on port ${PORT}`);
    console.log(`Using ${process.env.USE_MONGODB === 'true' ? 'MongoDB' : 'MySQL'} database`);
});
