/*
Para o exercício a seguir, considere que cada funcionário tenha apenas
os campos id, nome, genero e salario.
A lista retornada pela função deve ser uma lista contendo objetos javascript.

Crie uma função que receba uma lista de funcionários e um id.
A função deverá buscar o funcionário da lista que tem o id informado e o remover da lista, retornando
a lista atualizada.
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

const deleteById = (funcionarios,id) => {
    return funcionarios = funcionarios.filter(f=> f.id !== id);
    
}

