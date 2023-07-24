import dotenv from 'dotenv';
import mysql from 'mysql2';
import {Router} from 'express';
import {proxyGLibrosAutor, proxyGLibrosCategoria} from '../middleware/proxyGLibros.js';
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

GLibros.get('/GetLibrosPrestamo', (req,res)=>{
    con.query(
        /*SQL*/`SELECT l.id_libro, l.titulo, a.nombre AS NombreAutor, a.apellido AS ApellidoAutor, pt.estado FROM libro l
        INNER JOIN autor a ON l.id_autor = a.id_autor
        INNER JOIN prestamo pt ON l.id_libro = pt.id_libro
        WHERE pt.estado = 'Devuelto'`,
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

GLibros.get('/GetLibrosPrestamoFecha', (req,res)=>{
    con.query(
        /*SQL*/`SELECT l.id_libro, l.titulo, pt.fecha_devolucion, pt.estado FROM libro l
        INNER JOIN prestamo pt ON l.id_libro = pt.id_libro
        WHERE pt.estado = 'Prestado'`,
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

GLibros.get('/GetLibrosAutorEsp', proxyGLibrosAutor, (req,res)=>{
    const {Autor} = req.body;
    console.log(Autor);
    con.query(
        /*SQL*/`SELECT l.id_libro, l.titulo, a.nombre, a.apellido FROM libro l
        INNER JOIN autor a ON l.id_autor = a.id_autor
        WHERE a.nombre = '${Autor}'`,
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

GLibros.get('/GetLibrosCategoriaEsp', proxyGLibrosCategoria, (req,res)=>{
    const {Categoria} = req.body;
    con.query(
        /*SQL*/`SELECT l.id_libro, l.titulo, c.nombre FROM libro l
        INNER JOIN categoria c ON l.id_categoria = c.id_categoria
        WHERE c.nombre = '${Categoria}'`,
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

GLibros.get('/GetLibrosPaginas', (req,res)=>{
    con.query(
        /*SQL*/`SELECT l.id_libro, l.titulo, a.nombre AS NombreAutor, a.apellido AS ApellidoAutor, l.num_paginas FROM libro l
        INNER JOIN autor a ON l.id_autor = a.id_autor WHERE num_paginas > 500`,
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