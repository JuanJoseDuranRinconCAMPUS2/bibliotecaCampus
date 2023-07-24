import dotenv from 'dotenv';
import express from 'express';
import GAutores from './routes/GetAutores.js';
console.clear()
dotenv.config();

const BibliotecaApi = express();
BibliotecaApi.use(express.json());
// Endpoint con las consultas y puntos del taller
// ════════ ⋆★⋆ ════════
BibliotecaApi.use("/AutoresC", GAutores);
// ════════ ⋆★⋆ ════════

const config = JSON.parse(process.env.MY_CONFIG);
BibliotecaApi.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`);})