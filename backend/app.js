import dotenv from 'dotenv';
import express from 'express';
import { SignJWT, jwtVerify } from 'jose';
import GAutores from './routes/GetAutores.js';
import GCategoriasD from './routes/GetCategoriasD.js';
import GEditorialesD from './routes/GetEditorialesD.js';
import GEstadosL from './routes/GetEstadosL.js';
import GLibros from './routes/GetLibros.js';
import GPrestamos from './routes/GetPrestamos.js';
import GReservas from './routes/GetReservas.js';
import GUsuarios from './routes/GetUsuarios.js';
import CUsuarios from './routes/CrudUsuario.js';
console.clear()
dotenv.config();

const BibliotecaApi = express();
BibliotecaApi.use(express.json());
// Endpoint con las consultas y puntos del taller
// ════════ ⋆★⋆ ════════
BibliotecaApi.use("/AutoresC", GAutores);
BibliotecaApi.use("/CategoriasD", GCategoriasD);
BibliotecaApi.use("/EditorialesD", GEditorialesD);
BibliotecaApi.use("/EstadosL", GEstadosL);
BibliotecaApi.use("/Libros", GLibros);
BibliotecaApi.use("/Prestamos", GPrestamos);
BibliotecaApi.use("/Reservas", GReservas);
BibliotecaApi.use("/Usuarios", GUsuarios);
BibliotecaApi.use("/CUsuarios", CUsuarios);

// ════════ ⋆★⋆ ════════

const config = JSON.parse(process.env.MY_CONFIG);
BibliotecaApi.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`);})