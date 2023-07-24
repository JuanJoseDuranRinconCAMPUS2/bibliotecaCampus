import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validateGetPrestamosUsuario} from "../controller/vGPrestamos.js";
import { validate } from 'class-validator';

const proxyGPrestamosUsu = express();


proxyGPrestamosUsu.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validateGetPrestamosUsuario, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});


export {proxyGPrestamosUsu};