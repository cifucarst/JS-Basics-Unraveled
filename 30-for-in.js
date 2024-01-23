/* for...in => we will use it to iterate
over enumerable objects, that is, objects

for (variable in object){
    code
}
*/

const shoppingList = {
    apple: 5,
    pear: 3,
    orange: 2,
    grape: 1
}

for (fruit in shoppingList){
    console.log(fruit)
}

for (fruit in shoppingList){
    console.log(`${fruit} : ${shoppingList[fruit]}`)
}