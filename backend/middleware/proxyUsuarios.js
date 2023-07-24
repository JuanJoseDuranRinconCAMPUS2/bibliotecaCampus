import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validateCrudUsuarios } from "../controller/vCUsuarios.js";
import { validate } from 'class-validator';

const proxyPostUsuarios = express();

proxyPostUsuarios.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validateCrudUsuarios, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyPostUsuarios};