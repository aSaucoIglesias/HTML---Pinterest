const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(array, name) {

    const index = array.indexOf(name);
    if (index !== -1) {
        return `El nombre ${name} se encuentra en la posición ${index}`;
    } else {
        return `El nombre ${name} no se encuentra en la lista`;
    }
}

console.log(finderName(nameFinder, 'Tony'));
console.log(finderName(nameFinder, 'Antonio'));