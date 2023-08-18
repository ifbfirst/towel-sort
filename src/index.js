
// You should implement your task here.

module.exports = function towelSort (matrix) {

    let arrResult = [];
     if (matrix === undefined){
       return [];
    } else if (matrix.length !==0){
       for (let i = 0; i< matrix.length;i++){
     if (i % 2 !== 0) {
        arrResult =  [...arrResult, ...matrix[i].reverse()];   
    } else {arrResult = [...arrResult, ...matrix[i]];}
    
        }
         return arrResult;
    }
    
         else {return []};
    
      }
     
   
      
        



 

