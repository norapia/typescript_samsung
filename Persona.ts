import { Direccion } from './Direccion';
import { Telefono } from './Telefono';
import { Mail } from './Mail';

export class Persona {
  private _nombre: string;
  private _apellidos: string;
  private _edad: number;
  private _DNI: string;
  private _cumpleanos: string;
  private _colorFavorito: string;
  private _sexo: string;
  private _direcciones: Direccion[];
  private _mails: Mail[];
  private _telefonos: Telefono[];
  private _notas: string;

  constructor(
    nombre: string,
    apellidos: string,
    edad: number,
    DNI: string,
    cumpleanos: string,
    colorFavorito: string,
    sexo: string,
    direcciones: Direccion[],
    mails: Mail[],
    telefonos: Telefono[],
    notas: string
  ) {
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._edad = edad;
    this._DNI = DNI;
    this._cumpleanos = cumpleanos;
    this._colorFavorito = colorFavorito;
    this._sexo = sexo;
    this._direcciones = direcciones;
    this._mails = mails;
    this._telefonos = telefonos;
    this._notas = notas;
  }

  get nombre() {
    return this._nombre;
  }

  get apellidos() {
    return this._apellidos;
  }

  get edad() {
    return this._edad;
  }

  get DNI() {
    return this._DNI;
  }

  get cumpleanos() {
    return this._cumpleanos;
  }

  get colorFavorito() {
    return this._colorFavorito;
  }

  get sexo() {
    return this._sexo;
  }

  get direcciones() {
    return this._direcciones;
  }

  get mails() {
    return this._mails;
  }

  get telefonos() {
    return this._telefonos;
  }

  get notas() {
    return this._notas;
  }

  agregarDireccion(direccion: Direccion) {
    this._direcciones.push(direccion);
  }

  agregarMail(mail: Mail) {
    this._mails.push(mail);
  }

  agregarTelefono(telefono: Telefono) {
    this._telefonos.push(telefono);
  }

  public buscarDni(dni: string): boolean {
    return this._DNI === dni;
  }
}