
/* ======== Operadores de Comparação ============
   >      Maior que
   <      Menor que
   >=     Maior igual a
   <=     Menor igual a
   !=     Diferente de
   ==     Igual a
   !==    Diferente, incluse o tipo
   ===    Igual, inclusive o tipo
  =============================== */ 

  // Explicação dos operadores 
  console.log (5 > 4) // true
  console.log (5 < 4) // false
  console.log (5 >= 4) // true
  console.log (5 <= 4) // false
  console.log (5 != 4) // true
  console.log (5 == 5) // true
  console.log (5 !== '5') // true
  console.log (5 === '5') // false 

  // DESAFIO 01
  const name = 'José'
  const age = 18

  // Verificar se a pessoa é maior de 18 anos
  // se sim, deixar entrar, se não, bloquear a entrada
  if (age >= 18) {
   console.log (`Olá ${name}, pode entrar!!!`)
 } else {
   console.log (`Infelizmente ${name}, voce não possue idade suficiente`) 
 } 
 
 // se a pessoa tiver 17 anos
 // avisar para voltar quando completar 18 anos
 if (age === 17) {
    console.log (`Volte quando tiver 18 anos`)
 }


 /*================ Operadores Lógicos =============

  && (E/And) - Usado para que a condição final 
  seja **'verdadeira'**
  
  || (Ou/OR) - Uma das condições deve ser verdadeira
  
  ! (Não/not) - Usada para negar uma condição 

 =================================================== */

 console.log (' \n - - - -  Operadores Aritiméticos - - - - -')

 console.log (5 > 4 && 3 < 10) //true
 console.log (5 > 3 || 1 < 2) //true
 console.log (!(5 < 5)) // true

 // Desafio 1 respondido de forma mais simplicada
 // com os operadores aritiméticos
 
 if (!(age >= 18 )) {
    console.log (`Não pode entrar, ${name}`)
    if (age > 16 && age < 18){
       console.log ('Espere completar os 18 anos')
    }
 } else {
    console.log ('Pode entrar!!')
 }

 /* ######### OPERADORES ARITMÉTICOS ######### 
      
      *     Multiplicação
      +     Adição
      %     Resto da divisão
      /     Divisão
      -     subtração

   ##########################################*/

console.log (50 % 2.1)