let nombre = 'Ivan';
let apellido = 'Alvaretto'

let estudiante = `${nombre} ${apellido}  `
console.log(estudiante)

let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)

let estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)

let numeroletras = estudiante.length
console.log(numeroletras)

let letranom = nombre.charAt(0)
console.log(letranom)

let letraapel = apellido.charAt(8)
console.log(letraapel)

let sinespacio = estudiante.trim()
console.log(sinespacio)

let boolean = estudiante.includes('Ivan')
console.log(boolean)