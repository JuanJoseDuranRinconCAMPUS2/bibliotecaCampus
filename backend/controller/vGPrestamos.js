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
import { IsDefined, MaxLength, IsNotEmpty, Matches } from 'class-validator';
export class validateGetPrestamosUsuario {
    constructor(Usuario) {
        this.Usuario = Usuario;
    }
}
__decorate([
    Expose({ name: "Usuario" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Usuario es obligatorio' }; } }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El parametro Usuario debe tener como máximo 255 caracteres' }; } }),
    Matches(/^[\p{L}\s.]+$/u, { message: () => { throw { status: 400, message: 'El parametro Usuario debe ser una cadena de texto sin números ni caracteres especiales excepto "."' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Usuario no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateGetPrestamosUsuario.prototype, "Usuario", void 0);
