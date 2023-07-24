import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validateGetLibros } from "../controller/vGetLibros.js";
import { validate } from 'class-validator';

const proxyGLibrosAutor = express();

proxyGLibrosAutor.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validateGetLibros, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export default proxyGLibrosAutor;