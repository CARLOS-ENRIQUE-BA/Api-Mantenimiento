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
exports.StorageController = void 0;
class StorageController {
    constructor(storageService) {
        this.storageService = storageService;
        this.upload = (req, res) => __awaiter(this, void 0, void 0, function* () {
            if (!req.file) {
                return res.status(400).send('No file uploaded.');
            }
            try {
                const fileUrl = yield this.storageService.upload(req.file);
                res.json({ fileUrl });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).send(error.message);
                }
                else {
                    res.status(500).send('An unknown error occurred');
                }
            }
        });
    }
}
exports.StorageController = StorageController;
