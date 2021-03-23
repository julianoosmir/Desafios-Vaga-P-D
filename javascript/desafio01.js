/*
Paulo, de gênero masculino, tem 36 anos de idade, interesse em surf, skate e dança de salão.
Paulo é casado, tem alguns filhos e sua residência fica em Sokovia.
A esposa de Paulo se chama Mirella, tem 34 anos de idade e, além de compartilhar do interesse de 
Paulo por dança de salão, gosta de literatura e teatro.

Crie apenas um objeto javascript que, através do mesmo seja possível representar todas as informações
apresentadas sobre Paulo.
*/

const  individuo = {
    nome : 'Paulo',
    idade: 36,
    hobbies: ['surf', 'skate', 'dança de salão'],
    Casado: true,
    filhos: true,
    residencia: 'Sokovia',
    conjuge: {
        nome : 'Mirella',
        idade: 34,
        hobbies: ['literatura', 'teatro', 'dança de salão'],
        Casado: true,
        filhos: true,
    }
}