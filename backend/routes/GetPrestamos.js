import dotenv from 'dotenv';
import mysql from 'mysql2';
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

export default GPrestamos;