export class Direccion {
    private calle: string;
    private numero: number;
    private piso: string;
    private letra: string;
    private codigoPostal: string;
    private poblacion: string;
    private provincia: string;

    constructor(calle: string, numero: number, piso: string, letra: string, codigoPostal: string, poblacion: string, provincia: string) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this.codigoPostal = codigoPostal;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }

    public getCalle(): string {
        return this.calle;
    }

    public setCalle(calle: string): void {
        this.calle = calle;
    }

    public getNumero(): number {
        return this.numero;
    }

    public setNumero(numero: number): void {
        this.numero = numero;
    }

    public getPiso(): string {
        return this.piso;
    }

    public setPiso(piso: string): void {
        this.piso = piso;
    }

    public getLetra(): string {
        return this.letra;
    }

    public setLetra(letra: string): void {
        this.letra = letra;
    }

    public getCodigoPostal(): string {
        return this.codigoPostal;
    }

    public setCodigoPostal(codigoPostal: string): void {
        this.codigoPostal = codigoPostal;
    }

    public getPoblacion(): string {
        return this.poblacion;
    }

    public setPoblacion(poblacion: string): void {
        this.poblacion = poblacion;
    }

    public getProvincia(): string {
        return this.provincia;
    }

    public setProvincia(provincia: string): void {
        this.provincia = provincia;
    }
}