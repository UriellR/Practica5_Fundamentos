index
let arregloMatriz=[[1,2,3],[4,5,6],[7,8,9]];

function originalM(matriz) { 
for(let i=0,j=0;i<3;i++){ 
console.log(matriz[i][j],matriz[i][j+1],matriz[i][j+2]); 
}
} 

function matriz1(matriz) { 
 for(let i=2,j=2;i>=0;i--){ console.log(matriz[i][j],matriz[i][j-1],matriz[i][j-2]); 
}
} 

function matriz2(matriz) { 
for(let i=0,j=0;j<3;j++){ 
console.log(matriz[i][j],matriz[i+1][j],matriz[i+2][j]); 
}
} 

function matriz3(matriz) { 
for(let i=2,j=2;j>=0;j--){ 
console.log(matriz[i][j],matriz[i-1][j],matriz[i-2][j]); 
}
}

originalM(matriz);
matriz1(matriz);
matriz2(matriz);
matriz3(matriz);