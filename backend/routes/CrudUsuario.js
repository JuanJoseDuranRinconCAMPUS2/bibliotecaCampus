import dotenv from 'dotenv';
import mysql from 'mysql2';
import {Router} from 'express';
import {proxyPostUsuarios} from '../middleware/proxyUsuarios.js';
const CUsuarios = Router();

dotenv.config();
let con = undefined;
CUsuarios.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})

CUsuarios.get('/GetUsuarios', (req,res)=>{
    con.query(
        /*SQL*/`SELECT * FROM usuario`,
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

CUsuarios.post('/PostUsuarios', (req,res)=>{
    const { id_usuario } = req.body;
    con.query(
        /*SQL*/`SELECT id_usuario FROM usuario WHERE id_usuario = ${id_usuario};`,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al consultar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } 
            if (data.length !== 0) {
                delete req.body.id_usuario;
            }
            POSTUsuarios(res,req.body);
        }
    );
})
function POSTUsuarios(res,data) {
    con.query(
        /*SQL*/`INSERT INTO usuario SET ?`,
        data,
        (err,data2,fil)=>{
            if (err) {
                const errorMessage = `Error al enviar los datos`;
                res.status(500).send(`${errorMessage} error2 encontrado: ${err.sqlMessag}`);
            } 
            res.send("La data se ha enviado exitosamente");
        }
    );
}
export default CUsuarios;