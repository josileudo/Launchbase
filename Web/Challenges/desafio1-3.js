const users = [
  {name: 'Carlos', tech: ['HTML', 'CSS']},
  {name: 'Jarmine', tech: ['JavaScript', 'CSS']},
  {name: 'Tuane', tech: ['HTML', 'NODE.JS']}
]

for (let i = 0; i < users.length; i++){
  console.log (`${users[i].name} trabalha com ${(users[i].tech).join(', ')}`)
}

//##### Checar se o usuário trabalha com CSS #####

console.log ('\n')

function checkUser(user){
  for (let i=0; i < user.tech.length; i++){
    if (user.tech[i] == 'CSS'){
      return true
    }
  }
  return false
}

for (let i= 0; i < users.length; i++){
  const check = checkUser(users[i])
  if (check == true){
    console.log (`${users[i].name} trabalha com CSS`)
  } 
}

console.log ('\n')


// Soma de despesas e receitas

const userCount = [
  {
    name: 'Salvio',
    revenue: [115.3, 48.7, 98.3, 14.5],
    expenses: [85.3, 13.5, 19.5]
  },
  {
    name: 'Marcio',
    revenue: [24.6, 214.3, 45.3],
    expenses: [185.3, 12.1, 120.0]
  },
  {
    name: 'Lucia',
    revenue: [9.8, 120, 340.2, 45.3],
    expenses: [450.2, 29.9]
  }
]

function calculateBalance(revenue, expenses){
  const rev= sumNumber(revenue)
  const exp= sumNumber(expenses)
  const res = rev - exp
  return res
}

function sumNumber (number) {
  let sum= 0
  for (let i= 0; i < number.length; i++){
    sum = number[i] + sum
  }
  return sum
}

for (let i= 0; i < userCount.length; i++){
  const exp = userCount[i].revenue
  const rev= userCount[i].expenses
  const result= calculateBalance(exp, rev)

  if (result > 0){
    console.log(`${userCount[i].name} possui saldo POSITIVO de ${result.toFixed(2)}`)
  } else {
    console.log(`${userCount[i].name} possui saldo NEGATIVO de ${result.toFixed(2)}`)
  }
}
