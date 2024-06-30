/*
function recursive(){
    if (validation){
        call recursive
    }else{
        normal recursive, without recursive
    }
}
*/

// example

// function recursive(number){
//     console.log(number);
//     if (number < 5){
//         return recursive(number + 1);
//     }else{
//         return 5;
//     };
// };

// recursive(1);

// _____________________________________________________________________________


const ports = [21,22,25,80,139,443,3306,8080];
let port = 0

for (let index = 0; index < ports.length; index++){
    port = ports[index];
    console.log({index, port});
}


//______________________________________________________________________________

function recursiva(porstArray){
    if (porstArray.length != 0){
        const firstPort = porstArray[0];
        console.log(firstPort);
        porstArray.shift();
        return recursiva(porstArray);
    }
}