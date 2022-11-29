export class Cliente {
    constructor(
        public id?: number,
        public nome?: string,
        public telefone?: number,
        public email?: string,
        public cpf?: number,
        public cep?: number,
        public logradouro?: string,
        public numero?: number,
        public bairro?: string,
        public cidade?: string,
        public estado?: string,
        public complemento?: string
    ) {}
}
