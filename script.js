// let arr = [
//   {
//       model: 'Tesla',
//       price: 40000
//   },
//   {
//       model: 'Porshe',
//       price: 800000
//   },
//   {
//       model: 'Lamba',
//       price: 200000
//   },
//   {
//       model: 'Nexsia_1',
//       price: 4000
//   },
//   {
//       model: 'Mersedes-Benz',
//       price: 120000
//   },
//   {
//       model: 'BMW',
//       price: 120000
//   },
//   {
//       model: 'BAZ',
//       price: 2000
//   },
//   {
//       model:'Gentra',
//       price: 17000
//   }
// ]

// let cheap = []
// let expensive = []

// expensive = arr.filter(item => item.price < 7000 ? cheap.push(item): expensive.push(item))
// console.log(cheap);


let arr = [ 'daler','asad', 'beka', 'fatixan', 'ferferro', 'kesha', 'amin', 'xoji', 'shox', 'alfa', 'stas'] 
let name = prompt('Кого удалить ')

let index = arr.indexOf(name);
if (index !== -1) {
 let user = confirm(`${name} удалить?`)
 if( user === true ) {
    arr.splice(index, 1);
 } else {
   alert('Не удалено')
 }
}
console.log(arr);
