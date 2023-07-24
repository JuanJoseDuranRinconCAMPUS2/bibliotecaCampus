import dotenv from 'dotenv';
import mysql from 'mysql2';
import {proxyGPrestamosUsu} from '../middleware/proxyGPrestamos.js';
import {Router} from 'express';
const GPrestamos = Router();

dotenv.config();
let con = undefined;
GPrestamos.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})

GPrestamos.get('/GetPrestamos', (req,res)=>{
    con.query(
        /*SQL*/`SELECT id_prestamo, fecha_prestamo, fecha_devolucion, estado FROM prestamo`,
        (err,data,fil)=>{
            if (data.length == 0) {
                const errorMessage = `No hay data disponible en esta tabla`;
                res.status(500).send(errorMessage);
            } else {
                data = JSON.stringify(data);
                res.send(JSON.parse(data));
            }
        }
    );
})

GPrestamos.get('/GetPrestamosUsuario',proxyGPrestamosUsu, (req,res)=>{
    const {Usuario} = req.body;
    con.query(
        /*SQL*/`SELECT pr.*, u.nombre, u.apellido FROM prestamo pr
        INNER JOIN usuario u ON pr.id_usuario = u.id_usuario
        WHERE u.nombre = '${Usuario}'`,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `No hay data disponible en esta tabla`;
                res.status(500).send(err);
            } else {
                data = JSON.stringify(data);
                res.send(JSON.parse(data));
            }
        }
    );
})

export default GPrestamos;