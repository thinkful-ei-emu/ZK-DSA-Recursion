function countSheep(num){
  if(num === 0){
    console.log('All Sheep have jumped over the fence');
    return;

  }
  console.log(`${num}: Another Sheep jumped over the fence`);
  countSheep(num-1);



}

countSheep(3);








const powerCalculator=function(b,e){
  if(e<0){
    console.log('exponent should be >=0');
    return;
  }
  if(e===0){
    return 1;
  }
  

  return b*powerCalculator(b,e-1);


};

console.log(powerCalculator(10,4));


const reverseString=function(string){
  if(string===''){
    return ' ';
  }
  const newChar=string[0];
  return reverseString(string.slice(1))+newChar;
};

console.log(reverseString('tac'));



const calculateNth=function(n){
  if(n===0){
    return 0;
  }
  return n + calculateNth(n-1);
};

console.log(calculateNth(4));



const stringSplitter = function(string){
  if(!string.length){
    return ' ';
  }
  if(string[0]!=='/'){
    return string[0]+stringSplitter(string.slice(1));
  }
  return stringSplitter(string.slice(1));
}; 

console.log(stringSplitter('20/20/2020'));


// 1 2 3 4 5 6 7
// 1 1 2 3 5 8 13

const fibonacci=function(n){

  if(n===2||n===1){
    return 1;
  }

  
  return fibonacci(n-2)+fibonacci(n-1);



};

console.log(fibonacci(8));




const factorialFinder=function(num){
  if(num===1){
    return 1 ;
  }

 return  num*factorialFinder(num-1);
}
console.log(factorialFinder(5));



let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
//start in the top left in the bottom right mySmallMaze[0][0]
// first move will always be right or down
// check if either of those movements have a '*'
// to go right in array increment ++
//

// const mazeRunner=function(array){
//   if(array[])
//  }

const anagram=function(prefix,word){
  if(word.length===0){
    return;
  }
  return word[0]+anagram(word.slice(1));
}
console.log(anagram('east'));














