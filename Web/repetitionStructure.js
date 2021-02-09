 const revenue= [
   {tag: 'salario', value: 1000},
   {tag: 'Ajuda dos pais', value: 15},
   {tag: 'servico extra', value: 100},
 ]

 const expenses= [
  {tag: 'feira', value: 200},
  {tag: 'pet', value: 50},
  {tag: 'moto', value: 100},
 ]

 function sumRevenue(type){
  let sum= 0 
  for (let i= 0; i < type.length; i++){
    sum= type[i].value + sum
  }
  return sum
 }

 const resRevenue= sumRevenue(revenue)
 const resExpenses= sumRevenue(expenses)

 console.log('Receitas: R$', resRevenue.toFixed(2))
 console.log('Despesas: R$', resExpenses.toFixed(2))

function finalBalance(){
  return resRevenue - resExpenses
}

const result = finalBalance()
console.log(`Voce está com um saldo de: R$${result.toFixed(2)}`)

if (result >= 0) {
  console.log ('Parabéns amigão')
  if (result === 0){
    console.log ('voce não economizou')
  }
} else {
  console.log('Voce é muito gastador')
}
