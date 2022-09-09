import * as readline from 'readline';

let message: string = '=============================================\n' +
                      '=                   Welcome                 =\n' +
                      '=============================================';
console.log(message);


let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

const alphabet = ["A","B","C","D","E","F","G","H","I","J",
                  "K","L","M","N","O","P","Q","R","S","T",
                  "U","V","W","X","Y","Z","_","*","-","/",
                  "0","1","2","3","4","5","6","7","8","9",
                  "a","b","c","d","e","f","g","h","i","j",
                  "k","l","m","n","o","p","q","r","s","t",
                  "u", "v", "w", "x", "y", "z"];

const numberic = [
    [11,5,-6,11,7], [-7,13,-6,18,1], [10,5,5-3,-7], [-3,14,13,10,17], [-5,12,-2,-7,6], [-6,1,-3,-1,-3],
    [11,5,-4,12,1], [11,20,-2,5,19], [4,1,6,8,19], [-2,12,-6,11,0], [-3,14,13,1,10], [3,9,7,-4,19],
    [-2,15,8,-4,19], [-2,15,12,11,1], [8,15,16,-4,-3], [8,1,11,-7,-4], [4,9,-5,-1,-7], [8,21,-3,-4,1],
    [-3,12,-5,7,15], [8,12,14,-1,19], [12,15,2,4,-3], [11,8,2,-2,12], [15,9,12,-3,19], [-5,1,9,-7,-6]
]

let getindex: number[] = [];

function start(){
    rl.question('Please enter your pin: ', (answer: string) => {
        rl.question('Please enter your first pet name: ', (petname: string) => {
            const splitpin = answer.split("").map(Number);
            const splitpname = petname.toUpperCase().split("")
            deCodePetName(splitpname);
            cal1(splitpin, getindex);
        });
    });
}

function cal1(input:number[], getindex: number[]){
    let formula = [
        input[(getindex[4]-getindex[3])-1],
        input[getindex[2]-getindex[1]],
        input[(getindex[3]+getindex[0])-getindex[4]],
        input[(getindex[3]-getindex[1])-3],
        input[(getindex[2]-getindex[1])-1]
    ]

    numberic.forEach(num => {

        let decode: number = 0;
        let word: string = '';

        num.forEach((numcal, index) => {

            decode = formula[index] + numcal;
            
            let point: string = alphabet[decode-1];

            word = word + point;
        });
        console.log(word);
    });
}
    
function deCodePetName(name: string[]){
    alphabet.filter((inarr, index) => {
        if(name.indexOf(inarr) !== -1){
            getindex.push(index);
        }
    });
}

start();
export {}