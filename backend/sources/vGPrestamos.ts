import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, ValidateNested, IsObject} from 'class-validator';

export class validateGetPrestamosUsuario{
    @Expose({ name: "Usuario" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Usuario es obligatorio'}}})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'El parametro Usuario debe tener como máximo 255 caracteres'}}})
    @Matches(/^[\p{L}\s.]+$/u, {  message: ()=>{ throw { status: 400, message: 'El parametro Usuario debe ser una cadena de texto sin números ni caracteres especiales excepto "."'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Usuario no puede estar vacio'}}})
    Usuario: string;

    constructor(Usuario : string){
        this.Usuario = Usuario;
    }
}