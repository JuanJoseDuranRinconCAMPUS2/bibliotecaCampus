import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, ValidateNested, IsObject} from 'class-validator';

export class validateGetLibros{
    @Expose({ name: "Autor" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Autor es obligatorio'}}})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'El parametro Autor debe tener como máximo 255 caracteres'}}})
    @Matches(/^[\p{L}\s.]+$/u, {  message: ()=>{ throw { status: 400, message: 'El parametro Autor debe ser una cadena de texto sin números ni caracteres especiales excepto "."'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Autor no puede estar vacio'}}})
    Autor: string;

    constructor(Autor : string){
        this.Autor = Autor;
    }
}


export class validateGetLibrosCategoria{
    @Expose({ name: "Categoria" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Categoria es obligatorio'}}})
    @MaxLength(100, { message: ()=>{ throw { status: 400, message: 'El parametro Categoria debe tener como máximo 100 caracteres'}}})
    @Matches(/^[\p{L}\s]+$/u, {  message: ()=>{ throw { status: 400, message: 'El parametro Categoria debe ser una cadena de texto sin números ni caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Categoria no puede estar vacio'}}})
    Categoria: string;

    constructor(Categoria : string){
        this.Categoria = Categoria;
    }
}
