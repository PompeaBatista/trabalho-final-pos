export interface Produto {
    id?: number;
    nome: String;
    descricao: String;
    precoUnitario: number;
    unidade: number;
    "categoria": {
        id:number,
        nome:String,
        ativo:Boolean
        },
        
    "fornecedor": {
      id: number,
      nome: String,
      telefone: String,
	    cnpj: String,
	    email: String
      },

    "marca": {
        id: number,
        nome: String,
        descricao: String
    } 
  }
  
	
	
	
