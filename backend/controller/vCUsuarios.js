var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsEmail, Matches, IsString, IsNotEmpty } from 'class-validator';
export class validateCrudUsuarios {
    constructor(id_usuario, nombre, apellido, direccion, telefono, email) {
        this.id_usuario = id_usuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
    }
}
__decorate([
    Expose({ name: 'id_usuario' }),
    IsNumber({}, { message: () => { throw { status: 422, message: `El id_usuario no cumple con el formato` }; } }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro id_usuario es obligatorio` }; } }),
    __metadata("design:type", Number)
], validateCrudUsuarios.prototype, "id_usuario", void 0);
__decorate([
    Expose({ name: "nombre" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro nombre es obligatorio' }; } }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El parametro nombre debe tener como máximo 255 caracteres' }; } }),
    Matches(/^[\p{L}\s.]+$/u, { message: () => { throw { status: 400, message: 'El parametro nombre debe ser una cadena de texto sin números ni caracteres especiales excepto "."' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro nombre no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateCrudUsuarios.prototype, "nombre", void 0);
__decorate([
    Expose({ name: "apellido" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro nombre es obligatorio' }; } }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El parametro nombre debe tener como máximo 255 caracteres' }; } }),
    Matches(/^[\p{L}\s.]+$/u, { message: () => { throw { status: 400, message: 'El parametro nombre debe ser una cadena de texto sin números ni caracteres especiales excepto "."' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro nombre no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateCrudUsuarios.prototype, "apellido", void 0);
__decorate([
    Expose({ name: "direccion" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro direccion es direccion' }; } }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El parametro direccion debe tener como máximo 255 caracteres' }; } }),
    IsString({ message: 'El parámetro direccion debe ser un string' }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro direccion no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateCrudUsuarios.prototype, "direccion", void 0);
__decorate([
    Expose({ name: "telefono" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro telefono es obligatorio' }; } }),
    MaxLength(10, { message: () => { throw { status: 400, message: 'El parametro telefono debe tener como máximo 10 caracteres' }; } }),
    Matches(/^[A-Za-z0-9\s.]+$/, { message: () => { throw { status: 400, message: 'El parametro telefono debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro telefono no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateCrudUsuarios.prototype, "telefono", void 0);
__decorate([
    Expose({ name: 'email' }),
    IsEmail({}, { message: () => { throw { status: 422, message: `El email no cumple con el formato` }; } }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro email es obligatorio` }; } }),
    __metadata("design:type", String)
], validateCrudUsuarios.prototype, "email", void 0);
