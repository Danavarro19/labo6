function suma_promedio(array){
  let a =  array.reduce((total, number) => total + number),
      b = a/array.length;
  return [a,b.toFixed(2)];
}
