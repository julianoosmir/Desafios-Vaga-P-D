/*
Para o exercício a seguir, considere que cada funcionário tenha apenas
os campos id, nome, genero e salario.
A lista retornada pela função deve ser uma lista contendo objetos javascript.

Crie uma função que receba uma lista de funcionários e um funcionário com id.
A função deverá procurar o id do funcionário na lista de funcionários e alterar o funcionário encontrado
na lista para ter os valores informados no funcionário passado à função. Por exemplo, se o funcionário
passado for algo como {id: 23, nome: "Márcio"}, a função deverá encontrar na lista o funcionário de id 23
e alterar somente o nome dele para "Márcio", mantendo as demais informações e retornando a lista atualizada.
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
funcionarios.push(funcionario1, funcionario2, funcionario3, funcionario4);

const atualizarFuncinario = (funcionarios, funcionario) => {
    if (funcionario) {
        funcionarios.forEach(f => {
            if (f.id == funcionario.id) {
                f.nome = funcionario.nome ? funcionario.nome : f.nome
                f.genero = funcionario.genero ? funcionario.genero : f.genero
                f.salario = funcionario.salario ? funcionario.salario : f.salario
            }
        });
    }
    return funcionarios
}
console.log(atualizarFuncinario(funcionarios, {
    id: 3,
    nome: 'marcio',
    genero: "M"
}))