const count = [
  {
    name: "josé",
    revenue: [180, 80, 95],
    expenses: [90, 42, 45]
  },
  {
    name: "adriano",
    revenue: [110, 75, 15],
    expenses: [89, 102, 50]
  },
  {
    name: "chico",
    revenue: [110, 20, 33],
    expenses: [110, 52, 45]
  },
  {
    name: "Vinicius",
    revenue: [110, 30, 643, 968],
    expenses: [90, 1011, 456, 324]
  },
]

// Fará o cálula de receitas = despesas
function sumFinances(revenue, expenses) {
  const result = sumNumber(revenue) - sumNumber(expenses)
  return result
}

// Realizará a soma das despesas e receitas
function sumNumber(number) {
  let sum = 0
  for (let value of number) {
    sum = value + sum
  }
  return sum
}

// Verificará se está ou não endividado
function verifyIndebted(count) {
  const res = sumFinances(count.revenue, count.expenses)
  count.indebted = false
  if (res < 0) {
    count.indebted = true
  }
}

// Enviando a mensagem se está ou não endividado
function sendMessageIndebted(count) {
  if (count.indebted) {
    console.log(`O senhor ${count.name}, está INDIVIDADO`)
  } else {
    console.log(`O senhor ${count.name}, está de PARABÉNS`)
  }
}

// Chamando as funções para desempenhas os seus deveres 
function indebtedAccount(counts) {
  for (let value of counts) {
    verifyIndebted(value)
    sendMessageIndebted(value)
  }
}

indebtedAccount(count)
