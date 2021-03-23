/*
Para o exercício a seguir, considere que cada funcionário tenha apenas
os campos id, nome, genero e salario.
A lista retornada pela função deve ser uma lista contendo objetos javascript.

Crie uma função que receba duas listas, uma contendo funcionários e a outra contendo
os nomes dos campos que devem ser considerados pela função, de modo que a função retorne
uma lista contendo as informações dos funcionários de acordo com os campos informados na segunda lista,
ou seja, se na lista de campos tiver "nome" e "salario", a função deverá retornar uma lista contendo
somente os nomes e salários de cada funcionário.
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

const parametros = ['nome', 'salario'];

const funcao = (funcionarios, parametros) => {
    let dados = []
    if (parametros) {
        funcionarios.forEach(f => {
            let propriedades = {}
            parametros.forEach(p => {
                propriedades[p] = f[p]
            })
            dados.push(propriedades)
        })
    }
    return dados;
}
console.log(funcao(funcionarios, parametros))