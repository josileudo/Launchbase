// Cálculo do IMC

// const name= 'Bruna'
// const weight= 58
// const height= 1.75

// const imc = weight / (height*height)

// if (imc >= 30) {
//   console.log (`seu IMC foi de ${(imc.toFixed(3))}${name}, está acima do peso`)
// } else {
//   console.log(`seu IMC foi de ${imc.toFixed(3)}, ${name}, não está acima do peso`)
// }

// CALCULO DE APOSENTADORIA

const name= 'Maria'
const age= 55
const sex= 'F'
const contribuition= 28

const ageContri = (age + contribuition)
console.log (`idade de contribuicao: ${ageContri} Anos`)

const manRetiretment= sex === 'M' && (contribuition >= 35 && ageContri >= 95)
const womanRetiretment= sex === 'F' && (contribuition >= 30 && ageContri >= 85)

if (manRetiretment || womanRetiretment){
  console.log (`${name}, voce pode se aposentar!!`)
} else {
  console.log (`${name}, voce ainda não pode se aposentar`)
}