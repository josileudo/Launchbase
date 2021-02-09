// Criar um programa que calcula o consumo de um usuário

const customerConsumptionA= [
  {tag: 'agua', value: 5},
  {tag: 'refri', value: 45},
  {tag: 'baiao', value: 10}
]

const customerConsumptionB= [
  {tag: 'picole', value: 25},
  {tag: 'suco', value: 15},
  {tag: 'sopa', value: 18}
]

function sumCustomer(client){
  return client[0].value + client[1].value + client[2].value
} 

const clientA = sumCustomer(customerConsumptionA)
const clientB = sumCustomer(customerConsumptionB)

function sendMessenger(client, type){
  if (client > 35){
    console.log (`${type}: R$ ${client}, Cuidado, voce está gastando demais...`)
  } else {
    console.log (`${type}: R$ ${client}, voce é muito economista!!!`)
  }
}

sendMessenger( clientA, 'Cliente A')
sendMessenger( clientB, 'Cliente B')