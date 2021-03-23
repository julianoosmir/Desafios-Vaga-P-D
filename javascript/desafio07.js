/*
Para o exercício a seguir, considere que cada funcionário tenha apenas
os campos id, nome, genero e salario.
A lista retornada pela função deve ser uma lista contendo objetos javascript.

Crie uma função que receba uma lista de funcionários e um funcionário sem id.
A função deverá atribuir um id para o funcionário e acrescentá-lo ao final da lista, retornando a lista
exatamente como lhe foi passada, mas agora com o funcionário adicionado.
O id atribuído ao funcionário deverá ser uma unidade maior do que o maior id dos funcionários da lista.
*/


const criarFuncionario = (id, nome, genero, salario) => {
    return {
        id: id,
        nome: nome,
        genero: genero,
        salario: salario,
    }
}

const funcionario1 = criarFuncionario(1, 'pedro', 'M', 2000);
const funcionario2 = criarFuncionario(2, 'joão', 'M', 4000);
const funcionario3 = criarFuncionario(3, 'aline', 'F', 3000);
const funcionario4 = criarFuncionario(4, 'elena', 'F', 7000);
const funcionarios = []
funcionarios.push({
        nome: 'ana',
        genero: 'f',
        salario: 1400
    },
    funcionario1,
    funcionario2, {
        nome: 'tulio',
        genero: 'M',
        salario: 1000
    },
    funcionario3,
    funcionario4,

);

const adicinarID = (funcionarios) => {
    let comId = funcionarios.filter(f => f.id != null)
    let semId = funcionarios.filter(f => f.id == null)

    funcionarios = comId;
    semId.forEach(f => {
        let n = criarFuncionario(funcionarios.length + 1, f.nome, f.genero, f.salario)
        funcionarios.push(n)

    });

    return funcionarios;
}

console.log(adicinarID(funcionarios));