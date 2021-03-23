/*
Para esse desafio será necessário criar um projeto padrão do ReactJS, crie-o dentro dessa pasta com
o nome de "Desafio".

Usando ReactJS, crie um componente funcional que possa ser utilizado para cadastrar ou para alterar
os dados de um funcionário. Esse componente deverá ser carregado na página inicial ao startar o projeto.

a) Crie um arquivo .json ou .js e nele crie uma lista com 10 funcionários. Esses funcionários deverão ser
carregados pelo componente. Cada funcionário deverá ter os campos id, nome, idade e salario.

b) O componente, primeiramente deverá carregar a lista de funcionários criada no item a.

c) Caso receba um id, deverá carregar da lista o funcionário
de id correspondente e exibir suas informações nos campos do formulário para serem editadas, alterando
o funcionário da lista de acordo com os dados informados no formulário após clicar no botão "Atualizar".

d) Caso não receba um id, o componente deverá exibir os campos vazios para que o usuário entre com os
dados para cadastrar um novo funcionário e, após clicar no botão "Cadastrar", o componente deverá acrescentar
o novo funcionário à lista, já com um id, sendo que esse id deverá ser uma unidade maior que o maior id na lista.

Sobre os campos do formulário:

e) Deverá ter um input para o nome do funcionário, do tipo texto e a primeira letra deve ser formatada
para ser sempre maiúscula, mesmo que o usuário coloque minúscula.

f) Deverá ter um input para a idade. Esse campo deverá ser um input de texto, não um input numérico.
Não deve aceitar letras, somente números e se o valor for maior que 80, deverá alterar o valor do campo
para 80.

g) Deverá ter um input para o salário do funcionário, do tipo numérico.

Sobre o layout do componente:

h) O componente deverá ficar centralizado na tela, com todos os elementos um abaixo do outro.

i) O componente deverá ter uma borda cinza clara com cantos levemente arredondados.

j) O botão, assim como os inputs, deverão ter os cantos levemente arredondados.

k) Os inputs deverão ter um placeholder informando que informação cada um recebe.
*/