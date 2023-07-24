import dotenv from 'dotenv';
import mysql from 'mysql2';
import {Router} from 'express';
const GLibros = Router();

dotenv.config();
let con = undefined;
GLibros.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})

GLibros.get('/GetLibros', (req,res)=>{
    con.query(
        /*SQL*/`SELECT l.id_libro, l.titulo, a.nombre, a.apellido, ed.nombre as NombreEditorial FROM libro l
        INNER JOIN autor a ON l.id_autor = a.id_autor
        INNER JOIN editorial ed ON l.id_editorial = ed.id_editorial`,
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

export default GLibros;