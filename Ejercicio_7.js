function incerteza([...numbers]){
  let n = numbers.length,
      x = numbers.reduce((total,number) => total+number,0)/n;
      y= numbers.map(number => Math.pow(number-x,2))
                .reduce((total,number) => total+number, 0);
  return `incerteza: ${x.toFixed(2)}(+-)${(1/(n-1)*y).toFixed(2)}`;
}
