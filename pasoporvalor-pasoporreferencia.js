// paso por valor

let x = 1
let y = 'Hola'
let z = null

let a = x
let b = y
let c = z

a = 12
b = 'Platzi'
c = undefined

console.log(x,y,z,a,b,c)

// paso por referencia

let frutas = ['manzana']
frutas.push('pera')
console.log(frutas)

let panes = ['🥐']
let copiaDepanes = panes

panes.push('🥨​')

console.log(panes, copiaDepanes)