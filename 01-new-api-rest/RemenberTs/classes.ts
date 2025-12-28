export class Empresa {
  public readonly nome: string = '';

  constructor(nome: string) {
    this.nome = nome;
  }

  contratar(colaborador: string): string {
    return `contratei o ${colaborador}`;
  }
}

const empresa1 = new Empresa('Agronor');
console.log(`${empresa1.nome} ${empresa1.contratar('Elleylson')}`);

class Pai {
  public readonly idade: number = 0;
  public readonly peso: number = 0;

  constructor(idade: number, peso: number) {
    this.idade = idade;
    this.peso = peso;
  }

  falarQuemE(
    nome: string,
    sobrenome: string,
    idade: number,
    peso: number
  ): string {
    return `Ola eu sou ${nome} ${sobrenome} eu tenho ${idade} anos e meu peso e ${peso}`;
  }
}

class Filho extends Pai {
  public readonly nome: string = '';
  public readonly sobrenome: string = '';

  constructor(nome: string, sobrenome: string, idade: number, peso: number) {
    super(idade, peso);
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

const filho1 = new Filho('Elleylson', 'santos', 26, 81);
const value = filho1.falarQuemE(
  filho1.nome,
  filho1.sobrenome,
  filho1.idade,
  filho1.peso
);

console.log(value);
