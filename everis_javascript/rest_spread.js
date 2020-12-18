// REST
//www.horadecodar.com.br/2019/03/19/como-funcionam-o-rest-e-o-spread-operator/

function soma(...nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  return result
}

console.log(soma(5,8,9,10))

// Spread

const person = {
  nome: 'Fulano',
  idade: 19,
  sexo: 'M'
}

const person2 = {
  ...person,
  sobrenome: 'Tomato'
}

console.log(person2);