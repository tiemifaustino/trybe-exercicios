"use strict";
// ./index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 8000;
app.get('/', (req, res) => {
    res.status(http_status_codes_1.StatusCodes.OK).send('Express + TypeScript');
});
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
// Scripts 'package.json':
// start: executa o build da aplicação e depois roda o arquivo compilado dentro da pasta dist;
// dev: executa a aplicação em modo de desenvolvimento utilizando o ts-node-dev;
// build: executa a compilação do projeto utilizando o TSC.