export interface Produto {
    id?: number
    nome: string
    descricao: string
    precoUnitario: number
    unidade: number

    categoria: {
        id: number; 
        nome: string;
        ativo: boolean
    },

    fornecedor: {
    id: number;
    nome: string;
    telefone: string;
    cnpj: string;
    email: string;
    },

    marca: {
        id: number;
        nome: string;
        descricao: string
    }
}