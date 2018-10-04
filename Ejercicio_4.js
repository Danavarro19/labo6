function sumEdges(array){
  let n = array.length;
      a = array.splice(Math.trunc(n/2)).reverse();
      b = array.reduce((result, number, index) => {
              result[index] = number+a[index];
              return result;
            }, []);
      n % 2 == 0 ?  b : b.push(a[a.length-1]*2);
      return b;
}
