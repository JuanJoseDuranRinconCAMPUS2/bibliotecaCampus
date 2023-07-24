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
export class validateGetLibros {
    constructor(Autor) {
        this.Autor = Autor;
    }
}
__decorate([
    Expose({ name: "Autor" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Autor es obligatorio' }; } }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El parametro Autor debe tener como máximo 255 caracteres' }; } }),
    Matches(/^[\p{L}\s.]+$/u, { message: () => { throw { status: 400, message: 'El parametro Autor debe ser una cadena de texto sin números ni caracteres especiales excepto "."' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Autor no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateGetLibros.prototype, "Autor", void 0);
export class validateGetLibrosCategoria {
    constructor(Categoria) {
        this.Categoria = Categoria;
    }
}
__decorate([
    Expose({ name: "Categoria" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Categoria es obligatorio' }; } }),
    MaxLength(100, { message: () => { throw { status: 400, message: 'El parametro Categoria debe tener como máximo 100 caracteres' }; } }),
    Matches(/^[\p{L}\s]+$/u, { message: () => { throw { status: 400, message: 'El parametro Categoria debe ser una cadena de texto sin números ni caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Categoria no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateGetLibrosCategoria.prototype, "Categoria", void 0);
