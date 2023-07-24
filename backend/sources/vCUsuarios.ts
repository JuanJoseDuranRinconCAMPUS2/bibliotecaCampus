import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsEmail, MinLength, Matches, ValidateNested, IsObject, IsString, IsNotEmpty} from 'class-validator';

export class validateCrudUsuarios{
    @Expose({ name: 'id_usuario' })
    @IsNumber({}, {message: ()=>{ throw {status: 422, message: `El id_usuario no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro id_usuario es obligatorio`}}})
    id_usuario: number;

    @Expose({ name: "nombre" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro nombre es obligatorio'}}})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'El parametro nombre debe tener como máximo 255 caracteres'}}})
    @Matches(/^[\p{L}\s.]+$/u, {  message: ()=>{ throw { status: 400, message: 'El parametro nombre debe ser una cadena de texto sin números ni caracteres especiales excepto "."'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro nombre no puede estar vacio'}}})
    nombre: string; 

    @Expose({ name: "apellido" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro nombre es obligatorio'}}})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'El parametro nombre debe tener como máximo 255 caracteres'}}})
    @Matches(/^[\p{L}\s.]+$/u, {  message: ()=>{ throw { status: 400, message: 'El parametro nombre debe ser una cadena de texto sin números ni caracteres especiales excepto "."'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro nombre no puede estar vacio'}}})
    apellido: string; 

    @Expose({ name: "direccion" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro direccion es direccion'}}})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'El parametro direccion debe tener como máximo 255 caracteres'}}})
    @IsString({ message: 'El parámetro direccion debe ser un string' })
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro direccion no puede estar vacio'}}})
    direccion: string; 

    @Expose({ name: "telefono" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro telefono es obligatorio'}}})
    @MaxLength(10, { message: ()=>{ throw { status: 400, message: 'El parametro telefono debe tener como máximo 10 caracteres'}}})
    @Matches(/^[A-Za-z0-9\s.]+$/, { message: () => {throw { status: 400, message: 'El parametro telefono debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro telefono no puede estar vacio'}}})
    telefono: string;
    
    @Expose({ name: 'email' })
    @IsEmail({}, {message: ()=>{ throw {status: 422, message: `El email no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro email es obligatorio`}}})
    email: string;

    constructor(id_usuario: number, nombre: string, apellido: string, direccion: string, telefono: string, email: string) {
      this.id_usuario = id_usuario;
      this.nombre = nombre;
      this.apellido = apellido;
      this.direccion = direccion;
      this.telefono = telefono;
      this.email = email;
    }
}
