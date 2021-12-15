//Elabore un programa que valide si una matriz N X N es triangular inferior.
// Gian Abdiel Ek Huerta 
// version 1.0

function TodosSonArreglos(matriz){
    for (const fila of matriz){
        if (!(fila instanceof array)){
            return false;
        }
    
    }
    return true
}

function esMatrizTriangularInferior(matriz){
    if (matriz instanceof array){
        if (TodosSonArreglos(matriz)){
            if (matriz.length === matriz[0].length){
                for (let i = 0; i < matriz.length; i++){
                    for (let j = 0; i < matriz[i].length; j++){
                        if (j > i && matriz[i][j]!==0){
                            return false;
                        
                        }
                    }
                }
            }else{
                throw Error('La matriz debe de ser cuadrada :)');
            }
        }else {
            throw TypeError('Todas las fila de la matriz deben ser arreglos');
        }
    } else {
        throw TypeError('Debe de agregar un arreglo');
    }

}
/*
Primer ejemplo de prueba de Matriz
    [1, 0, 0]
    [3, 1, 0]
    [7, 1, 3]
*/
try{
    console.log(esMatrizTriangularInferior([[1, 0, 0], [3, 1, 0], [7, 1, 3]]));
} catch (e){
    console.log(`Error: ${e.message}`);
}

console.log
/*
Segundo ejemplo de prueba de Matriz
    [1, 0, 1]
    [3, 1, 0]
    [7, 1, 3]
*/
try{
    console.log(esMatrizTriangularInferior([[1, 0, 0], [3, 1, 0], [7, 1, 3]]));
} catch (e){
    console.log(`Error: ${e.message}`);
}

//Ejemplo de error de argumento
console.log();
try{
    console.log(esMatrizTriangularInferior('matriz')); //Error de argumento
} catch (e){
    console.log(`Error: ${e.message}`);
}

//Ejemplo de error de matriz
console.log();
try{
    console.log(esMatrizTriangularInferior([[1, 0, Matriz], [3, 1, 0], [7, 1, 3]])); //Error de filas de matriz deben ser arreglos
} catch (e){
    console.log(`Error: ${e.message}`);
}
