/*
Para o exercício a seguir, considere que cada funcionário tenha apenas
os campos id, nome, genero e salario.
O retorno da função deverá ser um objeto javascript.

Crie uma função que receba uma lista de funcionários e devolva a quantidade total de funcionários
e o total da soma dos salários de todos eles.
*/

const criarFuncionario = (id,nome,genero,salario) =>{
    return {
        id : id,
        nome : nome,
        genero: genero,
        salario : salario,
    }
}

const funcionario1 = criarFuncionario(1,'pedro','M',2000);
const funcionario2 = criarFuncionario(2,'joão','M',4000);
const funcionario3 = criarFuncionario(3,'aline','F',3000);

const funcionarios = []
funcionarios.push(funcionario1,funcionario2,funcionario3);

const totalFuncionarios= (funcionarios)=>{
  let salarioTotal = 0
  let funcionariosTotal = funcionarios.length
  funcionarios.forEach(f=> {
    salarioTotal += f.salario
  })

  return 'total de funcinarios : ' + funcionariosTotal + ' e seus salarios somam : ' + salarioTotal;
}
console.log(totalFuncionarios(funcionarios))